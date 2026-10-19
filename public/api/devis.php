<?php
require_once __DIR__ . '/_lib/form_handler.php';

kof_handle_form(
    'Nouvelle demande de devis',
    'Votre demande de devis a bien été envoyée ! Un expert vous rappelle sous 24h.',
    [
        ['name', 'Nom', true, 120],
        ['phone', 'Téléphone', true, 30],
        ['email', 'Email', true, 160],
        ['revenue', "Chiffre d'affaires annuel HT (€)", true, 40],
        ['page_origin', "Page d'origine", false, 40],
    ]
);
