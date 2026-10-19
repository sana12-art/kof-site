<?php
require_once __DIR__ . '/_lib/form_handler.php';

kof_handle_form(
    "Nouvelle demande de création d'entreprise",
    "Votre demande de création d'entreprise a bien été envoyée ! Un expert vous recontacte prochainement.",
    [
        ['nom', 'Nom', true, 120],
        ['email', 'Email', true, 160],
        ['telephone', 'Téléphone', true, 30],
        ['secteur_activite', "Domaine d'activité", false, 120],
        ['forme_juridique', 'Forme juridique', false, 120],
        ['nom_entreprise', 'Nom de la société', false, 160],
        ['ville', 'Ville', false, 80],
        ['message', 'Détails', false, 2000],
    ]
);
