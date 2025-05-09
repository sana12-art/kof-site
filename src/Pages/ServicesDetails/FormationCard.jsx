import React from "react";
import "./ServiceDetail.css"; 

const FormationCard = () => {
  return (
    <div className="service-cards">
      <h1>Service : Formations</h1>
      <p>
        Nous proposons des formations pratiques dans les domaines de la comptabilité,
        gestion, fiscalité et droit, pour renforcer vos compétences ou celles de vos équipes.
      </p>

      <h2>Thématiques proposées</h2>
      <ul>
        <li>Initiation à la comptabilité</li>
        <li>Gestion budgétaire</li>
        <li>Fiscalité pour non spécialistes</li>
      </ul>

      <h2>Public concerné</h2>
      <p>Dirigeants, salariés, indépendants ou porteurs de projet.</p>
    </div>
  );
};

export default FormationCard;