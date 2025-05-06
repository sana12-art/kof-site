import React, { useState } from 'react';
import "./Services.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openServiceModal = (serviceName) => {
    setSelectedService(serviceName);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-page">
      <div className="services-container">
        <h1>Nos services pour un accompagnement comptable sur-mesure</h1>

        <div className="services-columns">
          {/* Carte avec modale */}
          <div className="service-column">
            <h2>Expertise comptable</h2>
            <button className="learn-more" onClick={() => openServiceModal("Expertise comptable")}>➔</button>
          </div>

          {/* Autres cartes (pas encore interactives) */}
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

      {/* Partie descriptive Full Service (inchangée) */}
      <section className="full-service-section">
        {/* ... contenu existant ... */}
      </section>

      <section className="missions-section">
        {/* ... contenu existant ... */}
      </section>

      <section className="guide-services">
        {/* ... contenu existant ... */}
      </section>

      <section className="critere-services">
        {/* ... contenu existant ... */}
      </section>

      {/* MODALE DÉTAILLÉE POUR "Expertise comptable" */}
      {selectedService === "Expertise comptable" && (
        <div className="service-modal-overlay">
          <div className="service-modal">
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h1>KOF EXPERTS | VOTRE EXPERT COMPTABLE</h1>
              <h2>On gère votre comptabilité, vous vous concentrez sur l'essentiel : votre business</h2>
            </div>
            <div className="modal-content">
              <p>
                Avec un cabinet comptable dématérialisé, vous bénéficiez du meilleur des outils digitaux 
                et de l'accompagnement d'un expert qui maîtrise les spécificités comptables de votre activité.
              </p>
              <div className="modal-features">
                <div className="feature">
                  <h3>Nos engagements</h3>
                  <ul>
                    <li>Comptabilité 100% dématérialisée</li>
                    <li>Accès à votre espace client sécurisé 24/7</li>
                    <li>Un interlocuteur dédié</li>
                    <li>Analyse trimestrielle de votre santé financière</li>
                  </ul>
                </div>
                
              </div>
              <div className="modal-cta">
                <button className="cta-button">Obtenir un devis</button>
                <p className="cta-note">✔ Gratuit et sans engagement</p>
                <p className="certification">Inscrit à l'Ordre des Experts-Comptables</p>
                <div className="whatsapp-cta">
                  <span>Ou contactez-nous via </span>
                  <a href="https://wa.me/votrenumero" className="whatsapp-link" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
