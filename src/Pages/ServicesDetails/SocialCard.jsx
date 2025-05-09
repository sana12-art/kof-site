import React from "react";
import "./ServiceDetail.css"; 

const SocialCard = () => {
  return (
    <div className="service-cards">
      <h1>Service : Prestation sociale</h1>
      <p>
        La gestion sociale concerne vos salariés : contrats, paies, déclarations, etc.
        Nous vous aidons à assurer une gestion RH conforme et fluide.
      </p>

      <h2>Nos services</h2>
      <ul>
        <li>Établissement des bulletins de paie</li>
        <li>Déclarations sociales</li>
        <li>Conseil en droit du travail</li>
      </ul>

      <h2>Résultat</h2>
      <p>Une gestion du personnel simplifiée et maîtrisée.</p>
    </div>
  );
};

export default SocialCard;