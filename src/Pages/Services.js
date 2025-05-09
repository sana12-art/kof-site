import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const serviceRoutes = {
    "Comptabilité": "/comptabilite",
    "Création d'entreprise": "/creation-entreprise",
    "Conseil Fiscal": "/conseil-fiscal",
    "Business Plan": "/business-plan",
    "Conseil en gestion": "/conseil-gestion",
    "Conseil Juridique": "/conseil-juridique",
    "Préstation social": "/prestation-sociale",
    "Formations": "/formations"
  };

  return (
    <div className="services-page">
      <div className="services-container">
        <h1>Nos services pour un accompagnement comptable sur-mesure</h1>

        <div className="services-columns">
          {Object.keys(serviceRoutes).map((service, index) => (
            <div className="service-column" key={index}>
              <h2>{service}</h2>
              <button
                className="learn-more"
                onClick={() => navigate(serviceRoutes[service])}
              >
                ➔
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sections texte (inchangées) */}
      <section className="full-service-section"></section>
      <section className="missions-section"></section>
      <section className="guide-services"></section>
      <section className="critere-services"></section>
      <section class="hero-kof">
          <div class="hero-container">
            <h1 class="hero-titre">Accélérez votre croissance avec KOF-EXPERTS <br/>et concentrez-vous pleinement sur votre activité !</h1>
            
            <p class="hero-text">
              Libérez-vous de vos tâches chronophages, gagnez en efficacité et en sérénité.Choisissez notre accompagnement personnalisé pour
              optimiser vos processus 
              administratifs et financiers, afin que vous puissiez vous concentrer sur ce qui 
              compte vraiment : le développement de votre entreprise.
            </p>
            
            <a href="tel:+33153103206" class="hero-cta">
              Appeler un conseiller <span class="cta-arrow">→</span>
            </a>
          </div>
        </section>

    </div>
    
  );
};

export default Services;
