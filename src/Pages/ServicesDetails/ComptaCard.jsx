import React from "react";
import "./ServiceDetail.css"; 

const ComptaCard = () => {
  return (
    <div className="service-cards">
      <h1>Service : Comptabilité</h1>
      <p>
        La comptabilité est le cœur de la gestion financière de toute entreprise.
        Elle consiste à enregistrer, classer et résumer toutes les transactions financières
        dans un cadre légal défini.
      </p>

      <h2>Rôle de la comptabilité</h2>
      <ul>
        <li>Suivre les flux financiers</li>
        <li>Produire les états financiers (bilan, compte de résultat)</li>
        <li>Assurer la conformité fiscale</li>
        <li>Aider à la prise de décision stratégique</li>
      </ul>

      <h2>Ce que nous proposons</h2>
      <ul>
        <li>Tenue et révision comptable</li>
        <li>Établissement des bilans et déclarations fiscales</li>
        <li>Conseils personnalisés</li>
      </ul>
      

    </div>
  );
};

export default ComptaCard;
