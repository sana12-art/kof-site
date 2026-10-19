<?php
require_once __DIR__ . '/_lib/form_handler.php';

kof_handle_form(
    'Nouveau message depuis la page Contact',
    'Votre message a bien été envoyé ! Nous vous recontactons très vite.',
    [
        ['nom', 'Nom', true, 120],
        ['email', 'Email', true, 160],
        ['telephone', 'Téléphone', true, 30],
        ['entreprise', 'Entreprise', true, 160],
        ['message', 'Message', true, 3000],
    ]
);
