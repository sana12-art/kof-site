import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import PhoneInput from 'react-phone-input-2';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const serviceRoutes = {
    "Comptabilité": "/comptabilite",
    "Création d'entreprise": "/creation-entreprise",
    "Conseil Fiscal": "/conseil-fiscal",
    "Paie": "/paie",
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
      <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="compact-devis-container">
            <h3 className="compact-form-title">Obtenir un devis gratuit
            et sans engagement</h3>
            
            <form
              className="compact-devis-form"
              onSubmit={async (e) => {
                e.preventDefault();

                const nom = e.target[0].value;
                const phone = e.target[1].value;
                const email = e.target[2].value;
                const chiffreAffaires = e.target[3].value;

                try {
                  const response = await fetch('http://localhost:5000/api/devis', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nom, phone, email, chiffreAffaires })
                  });

                  if (response.ok) {
                    alert('Demande envoyée avec succès !');
                    e.target.reset(); // vider le formulaire
                  } else {
                    alert('Une erreur est survenue.');
                  }
                } catch (error) {
                  console.error('Erreur lors de l\'envoi du formulaire :', error);
                  alert('Erreur réseau.');
                }
              }}
            >
              <input type="text" placeholder="Nom" required />

              <PhoneInput
                country={'fr'}
                enableSearch={true}
                preferredCountries={['fr', 'ma', 'us', 'gb']}
                inputClass="form-input"
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: false
                }}
                placeholder="Numéro de téléphone"
              />

              <input type="email" placeholder="Adresse email" required />
              <input type="text" placeholder="Votre chiffre d'affaires annuel HT (€)" />

              <button type="submit" className="compact-submit-btn">
                Demandez votre devis
              </button>

              <p className="compact-legal">
                En cliquant sur "Demandez votre devis", vous acceptez d'être contacté par KOF-EXPERTS.
              </p>
            </form>
          </div>
        </motion.div>
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
