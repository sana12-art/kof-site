import React from "react";
import "./ServiceDetail.css"; 

const GestionCard = () => {
  return (
    <div className="service-cards">
      <h1>Service : Conseil en gestion</h1>
      <p>
        Le pilotage d’une entreprise nécessite une bonne maîtrise de la gestion interne.
        Nos experts vous accompagnent pour améliorer la rentabilité et structurer vos processus.
      </p>

      <h2>Nos domaines d’intervention</h2>
      <ul>
        <li>Analyse des coûts</li>
        <li>Suivi de performance</li>
        <li>Gestion de trésorerie</li>
      </ul>

      <h2>Bénéfices</h2>
      <p>Ils aident les sociétés à identifier les opportunités de croissance, à optimiser leurs opérations internes et à renforcer leur position sur le marché.</p>
    </div>
  );
};

export default GestionCard;