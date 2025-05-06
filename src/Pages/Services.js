import React from 'react';
import "./Services.css";

const Services = () => {
  // Données des services sous forme de cartes
  const serviceCards = [
    {
     
      items: [
        { 
          title: "Expertise comptable", 
        },
        { 
          title: "Le portail KOF-EXPERTS", 
        },
        { 
          title: "Business Plan", 
        },
        { 
          title: "Création d'entreprise", 
        },
        { 
          title: "Juridique", 
        }
      ]
    },
    {
      items: [
        { 
          title: "Fiscal", 
        },
       
        { 
          title: "Comptabilité", 
        },
        { 
          title: "Social", 
        },
        { 
          title: "Création d'entreprise offerte !", 
        }
      ]
    }
  ];

  return (
    <div className="services-page">
     
        {/* Grille des cartes de services */}
      <div className="services-container">
        <h1>Nos services pour un accompagnement comptable sur-mesure</h1>
          
          <div className="services-columns">
            <div className="service-column">
              <h2>Expertise comptable</h2>
              <button className="learn-more">➔</button>
            </div>
            <div className="service-column">
              <h2>Le portail KOF-EXPERTS</h2>
              <button className="learn-more">➔</button>

            </div>
            <div className="service-column">
              <h2>Business Plan</h2>
              <button className="learn-more">➔</button>

            </div>
            <div className="service-column">
              <h2>Création d'entreprise</h2>
              <button className="learn-more">➔</button>

            </div>
            <div className="service-column">
              <h2>Juridique</h2>
              <button className="learn-more">➔</button>

            </div>
            

            {/* Colonne Fiscal */}
            <div className="service-column">
              <h2>Fiscal</h2>
              <button className="learn-more">➔</button>

            </div>
            <div className="service-column">
              <h2>Comptabilité</h2>
              <button className="learn-more">➔</button>

            </div>
            <div className="service-column">
              <h2>Social</h2>
              <button className="learn-more">➔</button>

            </div>
            <div className="service-column">
              <h2>Formations</h2>
              <button className="learn-more">➔</button>

            </div>

          
      </div>
    </div>

      {/* Description Full Service */}
      <section className="full-service-section">
        <p>Alors que certains cabinets comptables se concentrent sur la prestation d'une sélection spécifique de services, d'autres proposent une solution intégrale à leurs clients, communément nommée "Full service"  .</p>
        
        <p>Apprenez tout sur le comptable full service, des prestations offertes aux bénéfices d'engager un tel professionnel, sans oublier les facteurs à considérer lors de la sélection de votre comptable full service.</p>
        
        <h2>Expert comptable full service : définition</h2>
        
        <p>Un expert comptable full service est un expert-comptable qui offre une gamme complète de services comptables, fiscaux, sociaux et financiers à ses clients.</p>
      </section>

      {/* Missions Full Service */}
      <section className="missions-section">
        <h2>Quels sont les services et les missions d'un expert-comptable en full-service ?</h2>
        
        <p>Comme son nom l'indique, l'expert comptable full service propose à sa clientèle une expertise comptable à 360°, tout au long de la durée de vie des entreprises.</p>
        <p>De manière générale, un expert-comptable tout-en-un peut offrir les services suivants :De manière générale, un expert-comptable tout-en-un peut offrir les services suivants :</p>
        
        <ul className="missions-list">
          <li className="mission-item"><strong>Tenue des livres comptables</strong> : tenue à jour de la comptabilité, des registres financiers et des états financiers de l'entreprise, établissement des comptes annuels,</li>
          <li className="mission-item"><strong>Préparation de déclarations fiscales</strong> : préparation et dépôt des déclarations fiscales et des déclarations de TVA des entreprises,</li>
          <li className="mission-item"><strong>Planification fiscale</strong> : aide à la planification fiscale pour minimiser les impôts de l'entreprise,</li>
          <li className="mission-item"><strong>Consultation financière</strong> : conseils en matière de gestion des finances, de trésorerie, de budget et d'investissement,</li>
          <li className="mission-item"><strong>Gestion de paie et du personnel</strong> : gestion de la paie des employés, incluant le calcul des salaires et des cotisations sociales,</li>
        </ul>
      </section>

      
    </div>
  );
};

export default Services;