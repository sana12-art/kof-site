<?php
// Configuration des formulaires du site KOF-EXPERTS.
// Modifiable directement sur le serveur (FTP) sans avoir besoin de refaire un build.

// Adresse qui reçoit toutes les demandes des formulaires.
define('KOF_TO_EMAIL', 'contact@kof-experts.com');

// Expéditeur technique des emails. Idéalement une adresse sur le même nom de
// domaine que le site (kof-experts.com) : certains serveurs de messagerie
// rejettent ou mettent en spam les emails dont l'expéditeur ne correspond pas
// au domaine qui les envoie.
define('KOF_FROM_EMAIL', 'site@kof-experts.com');
define('KOF_FROM_NAME', 'Site KOF-EXPERTS');

// Domaines autorisés à appeler ces scripts (protection de base contre les
// appels depuis un autre site). Le domaine du site est toujours autorisé.
define('KOF_ALLOWED_HOSTS', ['kof-experts.com', 'www.kof-experts.com', 'localhost']);
