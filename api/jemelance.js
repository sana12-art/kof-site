const formHandler = require('./_lib/formHandler');

module.exports = formHandler({
  subject: 'Nouveau message depuis la page Contact',
  success: 'Votre message a bien été envoyé ! Nous vous recontactons très vite.',
  fields: [
    ['nom', 'Nom', true, 120],
    ['email', 'Email', true, 160],
    ['telephone', 'Téléphone', true, 30],
    ['entreprise', 'Entreprise', true, 160],
    ['message', 'Message', true, 3000],
  ],
});
