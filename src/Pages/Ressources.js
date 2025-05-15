// src/Pages/Ressources.js
import React from 'react';
import './Ressources.css'; // On créera ce fichier après

const Ressources = () => {
  return (
    <div className="ressources-container">
      <h1>Ressources Utiles</h1>
      <section>
        <h2>Guides pratiques</h2>
        <ul>
          <li>Créer une entreprise en France</li>
          <li>Choisir un statut juridique</li>
        </ul>
      </section>

      <section>
        <h2>Outils gratuits</h2>
        <ul>
          <li>Simulateur de charges</li>
          <li>Générateur de devis/facture</li>
        </ul>
      </section>

      <section>
        <h2>Articles & Conseils</h2>
        <ul>
          <li>5 erreurs à éviter en gestion comptable</li>
          <li>Comment optimiser sa fiscalité ?</li>
        </ul>
      </section>

      <section>
        <h2>Modèles à télécharger</h2>
        <ul>
          <li><a href="#">Modèle de business plan</a></li>
          <li><a href="#">Modèle de contrat de prestation</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Ressources;