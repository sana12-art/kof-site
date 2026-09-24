const formHandler = require('./_lib/formHandler');

module.exports = formHandler({
  subject: 'Nouvelle demande de devis',
  success: 'Votre demande de devis a bien été envoyée ! Un expert vous rappelle sous 24h.',
  fields: [
    ['name', 'Nom', true, 120],
    ['phone', 'Téléphone', true, 30],
    ['email', 'Email', true, 160],
    ['revenue', "Chiffre d'affaires annuel HT (€)", true, 40],
    ['page_origin', 'Page d\'origine', false, 40],
  ],
});
