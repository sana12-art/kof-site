import React from "react";
import "./ServiceDetail.css"; 

const CreationEntrepriseCard = () => {
  return (
    <div className="service-cards">

      <h1>Service : Création d'entreprise</h1>
      <p>
        Créer une entreprise peut être complexe. Nous simplifions ce processus en vous accompagnant
        à chaque étape juridique, administrative et stratégique.
      </p>

      <h2>Rôle du service</h2>
      <ul>
        <li>Choix du statut juridique</li>
        <li>Rédaction des statuts</li>
        <li>Formalités de création (immatriculation, publication, etc.)</li>
      </ul>

      <h2>Notre accompagnement</h2>
      <ul>
        <li>Conseils personnalisés</li>
        <li>Réalisation des démarches en ligne ou en physique</li>
        <li>Suivi post-création</li>
      </ul>
    </div>
  );
};

export default CreationEntrepriseCard;