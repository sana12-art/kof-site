const formHandler = require('./_lib/formHandler');

module.exports = formHandler({
  subject: 'Nouvelle demande de consultation',
  success: 'Votre demande de consultation a bien été envoyée. Nous vous recontactons rapidement.',
  fields: [
    ['service', 'Service souhaité', true, 80],
    ['nom', 'Nom', true, 120],
    ['email', 'Email', true, 160],
    ['phone', 'Téléphone', true, 30],
    ['dateHeure', 'Date et heure préférées', false, 40],
    ['questions', 'Questions', false, 2000],
  ],
});
