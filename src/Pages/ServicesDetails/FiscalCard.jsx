import React from "react";
import "./ServiceDetail.css"; 

const FiscalCard = () => {
  return (
    <div className="service-cards">
      <h1>Service : Conseil Fiscal</h1>
      <p>
        La fiscalité est une composante essentielle de la stratégie financière. Nous vous aidons
        à optimiser vos charges fiscales tout en restant conforme à la loi.
      </p>

      <h2>Ce que nous faisons</h2>
      <ul>
        <li>Déclarations fiscales (TVA, IS, IR...)</li>
        <li>Analyse de la situation fiscale</li>
        <li>Optimisation fiscale légale</li>
      </ul>

      <h2>Objectif</h2>
      <p>objectif principal est d'aider leurs clients à comprendre et à gérer efficacement leur situation fiscale, tout en se conformant aux lois fiscales en vigueur. Les fiscalistes aident leurs clients à définir les enjeux fiscaux de manière à respecter les lois, tout en optimisant le coût fiscal.</p>
    </div>
  );
};

export default FiscalCard;
