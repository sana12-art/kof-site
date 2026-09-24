const formHandler = require('./_lib/formHandler');

module.exports = formHandler({
  subject: "Nouvelle demande de création d'entreprise",
  success: 'Votre demande de création d\'entreprise a bien été envoyée ! Un expert vous recontacte prochainement.',
  fields: [
    ['nom', 'Nom', true, 120],
    ['email', 'Email', true, 160],
    ['telephone', 'Téléphone', true, 30],
    ['secteur_activite', "Domaine d'activité", false, 120],
    ['forme_juridique', 'Forme juridique', false, 120],
    ['nom_entreprise', 'Nom de la société', false, 160],
    ['ville', 'Ville', false, 80],
    ['message', 'Détails', false, 2000],
  ],
});
