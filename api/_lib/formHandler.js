// Fabrique un endpoint Vercel qui valide un formulaire et l'envoie par email via Resend.
// Variables d'environnement (Vercel > Settings > Environment Variables) :
//   RESEND_API_KEY   clé API Resend (obligatoire)
//   CONTACT_TO_EMAIL adresse qui reçoit les demandes (obligatoire)
//   MAIL_FROM        expéditeur, ex : "KOF-EXPERTS <contact@kof-experts.com>" (défaut : onboarding@resend.dev)
//   ALLOWED_ORIGINS  origines autorisées, séparées par des virgules (facultatif ; le domaine du site est toujours accepté)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const clean = (value, max) => String(value ?? '').replace(/\r/g, '').trim().slice(0, max);

function originAllowed(req) {
  const origin = req.headers.origin;
  if (!origin) return false;
  let host;
  try {
    host = new URL(origin).host;
  } catch {
    return false;
  }
  const extra = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  return (
    host === req.headers.host || // même domaine que le site (production ou aperçu Vercel)
    host.startsWith('localhost') ||
    extra.includes(origin)
  );
}

/**
 * @param {object} options
 * @param {string} options.subject  Objet de l'email
 * @param {string} options.success  Message renvoyé au visiteur
 * @param {Array<[string, string, boolean?, number?]>} options.fields  [clé, libellé, obligatoire, longueur max]
 */
module.exports = function formHandler({ subject, success, fields }) {
  return async function handler(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ message: 'Méthode non autorisée.' });
    }
    if (!originAllowed(req)) {
      return res.status(403).json({ message: 'Origine non autorisée.' });
    }

    const body = req.body && typeof req.body === 'object' ? req.body : {};
    const values = {};
    for (const [key, label, required, max = 500] of fields) {
      const value = clean(body[key], max);
      if (required && !value) {
        return res.status(400).json({ message: `Le champ « ${label} » est obligatoire.` });
      }
      values[key] = value;
    }
    if ('email' in values && !EMAIL_RE.test(values.email)) {
      return res.status(400).json({ message: 'Adresse email invalide.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !to) {
      console.error('RESEND_API_KEY ou CONTACT_TO_EMAIL manquant');
      return res.status(500).json({ message: "Le service d'envoi n'est pas encore configuré. Merci de nous appeler." });
    }

    const rows = fields
      .filter(([key]) => values[key])
      .map(
        ([key, label]) =>
          `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${escapeHtml(label)}</td>` +
          `<td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(values[key])}</td></tr>`
      )
      .join('');
    const text = fields
      .filter(([key]) => values[key])
      .map(([key, label]) => `${label} : ${values[key]}`)
      .join('\n');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.MAIL_FROM || 'KOF-EXPERTS <onboarding@resend.dev>',
          to: [to],
          reply_to: values.email || undefined,
          subject,
          html: `<h2>${escapeHtml(subject)}</h2><table style="border-collapse:collapse">${rows}</table>`,
          text,
        }),
      });
      if (!response.ok) {
        console.error('Resend', response.status, await response.text());
        return res.status(502).json({ message: "L'envoi a échoué. Merci de réessayer ou de nous appeler." });
      }
      return res.status(200).json({ message: success });
    } catch (error) {
      console.error('Envoi email', error);
      return res.status(502).json({ message: "L'envoi a échoué. Merci de réessayer ou de nous appeler." });
    }
  };
};
