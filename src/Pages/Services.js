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

  const serviceDescriptions = {
    "Comptabilité": "Nous vous accompagnons dans la gestion comptable complète de votre entreprise.",
    "Création d'entreprise": "Nous facilitons toutes les étapes de création d'entreprise.",
    "Conseil Fiscal": "Optimisez votre fiscalité grâce à nos conseils personnalisés.",
    "Business Plan": "Élaboration de business plan sur mesure pour vos projets.",
    "Conseil en gestion": "Appui stratégique pour piloter efficacement votre entreprise.",
    "Conseil Juridique": "Conseils juridiques adaptés à vos besoins professionnels.",
    "Préstation social": "Gestion sociale et ressources humaines externalisées.",
    "Formations": "Formations pratiques en comptabilité, gestion, et plus encore.",
  };

  return (
    <div className="services-page">
      <div className="services-container">
        <h1>Nos services pour un accompagnement comptable sur-mesure</h1>

        <div className="services-columns">
          {Object.keys(serviceDescriptions).map((service, index) => (
            <div className="service-column" key={index}>
              <h2>{service}</h2>
              <button className="learn-more" onClick={() => openServiceModal(service)}>➔</button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>✖</button>
            <div className="modal-header">
              <h1>{selectedService}</h1>
            </div>
            <div className="modal-content">
              <p>{serviceDescriptions[selectedService]}</p>
            </div>
          </div>
        </div>
      )}

      {/* Sections texte (inchangées) */}
      <section className="full-service-section"></section>
      <section className="missions-section"></section>
      <section className="guide-services"></section>
      <section className="critere-services"></section>
    </div>
  );
};

export default Services;
