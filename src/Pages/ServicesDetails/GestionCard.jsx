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
      <p>En entreprises, les avantages tels que les primes et les commissions peuvent également augmenter leur rémunération globale. Un conseiller en gestion senior indépendant peut percevoir des honoraires représentant entre 0,5 et 3% du patrimoine (immobilier ou financier) de son client.</p>
    </div>
  );
};

export default GestionCard;