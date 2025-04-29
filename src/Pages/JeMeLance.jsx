import React from 'react';
import './JeMeLance.css';

function JeMeLance() {
  return (
    <div className="jemelance-container">
      <h1>Rejoignez l'aventure avec KOF</h1>
      <p>Nous sommes impatients de construire votre succès ensemble. Laissez-nous vos informations et commencez votre parcours entrepreneurial dès aujourd'hui !</p>
      
      <form className="contact-form">
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <input type="email" placeholder="Votre numéro de téléphone" required />
        <input type="email" placeholder="Le nom de votre entreprise" required />
        <textarea placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default JeMeLance;
