import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1>Abonnez-vous à notre Newsletter</h1>
      <p>Recevez chaque mois des conseils, actualités et astuces pour booster votre activité.</p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Entrez votre adresse email"
          required
        />
        <button type="submit">S'abonner</button>
      </form>
    </div>
  );
};

export default Newsletter;
