<?php
// Gestionnaire commun des formulaires du site : validation, anti-spam basique,
// envoi par email via la fonction mail() native de PHP (aucune dépendance,
// fonctionne sur la quasi-totalité des hébergements mutualisés).

require_once __DIR__ . '/../config.php';

function kof_json_response($status, $data) {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function kof_clean($value, $max) {
    $value = is_string($value) || is_numeric($value) ? (string) $value : '';
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = trim($value);
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max);
    }
    return substr($value, 0, $max);
}

function kof_origin_allowed() {
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $source = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');

    if ($source === '') {
        // Pas d'en-tête Origin/Referer : cas normal pour certains clients,
        // on laisse passer plutôt que de bloquer des demandes légitimes.
        return true;
    }

    $sourceHost = parse_url($source, PHP_URL_HOST);
    if ($sourceHost === null) {
        return false;
    }
    if (strcasecmp($sourceHost, $host) === 0) {
        return true;
    }
    foreach (KOF_ALLOWED_HOSTS as $allowed) {
        if (strcasecmp($sourceHost, $allowed) === 0) {
            return true;
        }
    }
    return false;
}

// Anti-spam simple : limite le nombre d'envois par IP (20 / 15 min).
// Échoue silencieusement si le dossier temporaire n'est pas inscriptible,
// pour ne jamais bloquer un formulaire légitime à cause de ça.
function kof_rate_limited() {
    try {
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
        $dir = sys_get_temp_dir() . '/kof_rate';
        if (!is_dir($dir)) {
            @mkdir($dir, 0700, true);
        }
        $file = $dir . '/' . md5($ip) . '.json';
        $now = time();
        $window = 15 * 60;
        $max = 20;

        $data = ['count' => 0, 'reset' => $now + $window];
        if (is_file($file)) {
            $raw = @file_get_contents($file);
            $decoded = $raw ? json_decode($raw, true) : null;
            if (is_array($decoded) && isset($decoded['count'], $decoded['reset'])) {
                $data = $decoded;
            }
        }
        if ($now > $data['reset']) {
            $data = ['count' => 0, 'reset' => $now + $window];
        }
        $data['count']++;
        @file_put_contents($file, json_encode($data));

        return $data['count'] > $max;
    } catch (\Throwable $e) {
        return false;
    }
}

function kof_html_escape($value) {
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

/**
 * @param string $subject Objet de l'email
 * @param string $success Message renvoyé au visiteur en cas de succès
 * @param array  $fields  Liste de [clé, libellé, obligatoire, longueur max]
 */
function kof_handle_form($subject, $success, $fields) {
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        header('Allow: POST');
        kof_json_response(405, ['message' => 'Méthode non autorisée.']);
    }

    if (!kof_origin_allowed()) {
        kof_json_response(403, ['message' => 'Origine non autorisée.']);
    }

    if (kof_rate_limited()) {
        kof_json_response(429, ['message' => 'Trop de demandes. Merci de réessayer dans quelques minutes.']);
    }

    $raw = file_get_contents('php://input');
    $body = json_decode($raw, true);
    if (!is_array($body)) {
        $body = $_POST;
    }

    $values = [];
    foreach ($fields as $field) {
        [$key, $label, $required, $max] = array_pad($field, 4, null);
        $max = $max ?? 500;
        $value = kof_clean($body[$key] ?? '', $max);
        if ($required && $value === '') {
            kof_json_response(400, ['message' => "Le champ « $label » est obligatoire."]);
        }
        $values[$key] = $value;
    }

    if (array_key_exists('email', $values) && $values['email'] !== '') {
        if (!filter_var($values['email'], FILTER_VALIDATE_EMAIL)) {
            kof_json_response(400, ['message' => 'Adresse email invalide.']);
        }
    }

    $rowsHtml = '';
    $rowsText = [];
    foreach ($fields as $field) {
        [$key, $label] = $field;
        if (($values[$key] ?? '') === '') {
            continue;
        }
        $rowsHtml .= '<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">'
            . kof_html_escape($label) . '</td><td style="padding:6px 12px;white-space:pre-wrap">'
            . nl2br(kof_html_escape($values[$key])) . '</td></tr>';
        $rowsText[] = $label . ' : ' . $values[$key];
    }

    $htmlBody = '<h2>' . kof_html_escape($subject) . '</h2>'
        . '<table style="border-collapse:collapse;font-family:sans-serif">' . $rowsHtml . '</table>';
    $textBody = implode("\n", $rowsText);

    $boundary = 'kof-' . md5(uniqid('', true));
    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: multipart/alternative; boundary="' . $boundary . '"';
    $headers[] = 'From: ' . '=?UTF-8?B?' . base64_encode(KOF_FROM_NAME) . '?= <' . KOF_FROM_EMAIL . '>';
    if (!empty($values['email'])) {
        $headers[] = 'Reply-To: ' . $values['email'];
    }

    $message = "--$boundary\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: 8bit\r\n\r\n"
        . $textBody . "\r\n"
        . "--$boundary\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: 8bit\r\n\r\n"
        . $htmlBody . "\r\n"
        . "--$boundary--";

    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    $sent = @mail(KOF_TO_EMAIL, $encodedSubject, $message, implode("\r\n", $headers));

    if (!$sent) {
        error_log('KOF mail() a échoué pour le formulaire : ' . $subject);
        kof_json_response(502, ['message' => "L'envoi a échoué. Merci de réessayer ou de nous appeler."]);
    }

    kof_json_response(200, ['message' => $success]);
}
