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
    const [nom, setNom] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [chiffreAffaires, setChiffreAffaires] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
  
    const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      nom,
      phone,
      email,
      chiffreAffaires
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSuccessMessage('Merci ! Votre demande a bien été envoyée. Un conseiller vous contactera très bientôt.');
        setErrorMessage('');
        setNom('');
        setPhone('');
        setEmail('');
        setChiffreAffaires('');
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        setErrorMessage('Une erreur est survenue lors de l’envoi. Veuillez réessayer.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setErrorMessage('Erreur réseau. Veuillez vérifier votre connexion.');
      setSuccessMessage('');
    }
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
                     <h3 className="compact-form-title">OBTENIR UN DEVIS GRATUIT ET SANS ENGAGEMENT </h3>
                     {successMessage && 
                       <div className="success-message">
                         Merci ! Votre demande a bien été envoyée. Un conseiller vous contactera très bientôt.
                       </div>
                     }
                     {errorMessage && 
                       <div className="error-message">
                         {errorMessage}
                       </div>
                     }  
                     <form className="compact-devis-form" onSubmit={handleSubmit}>
                       <input
                         type="text"
                         placeholder="Nom"
                         value={nom}
                         onChange={(e) => setNom(e.target.value)}
                         required
                       />
         
                       <PhoneInput
                         country={'fr'}
                         enableSearch={true}
                         preferredCountries={['fr', 'ma', 'us', 'gb']}
                         inputClass="form-input"
                         inputProps={{
                           name: 'phone',
                           required: true,
                           autoFocus: false,
                         }}
                         value={phone}
                         onChange={setPhone}
                         placeholder="Numéro de téléphone"
                       />
         
                       <input
                         type="email"
                         placeholder="Adresse email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                       />
         
                       <input
                         type="text"
                         placeholder="Votre chiffre d'affaires annuel HT (€)"
                         value={chiffreAffaires}
                         onChange={(e) => setChiffreAffaires(e.target.value)}
                       />
         
                       <button type="submit" className="compact-submit-btn">
                         Demandez votre devis
                       </button>
         
                       <p className="compact-legal">
                         En cliquant sur "Demandez votre devis", vous acceptez d'être contacté par KOF-EXPERTS.
                       </p>
                     </form>
                     
                    
                   </div>
                 </motion.div>
                  <motion.div className="checklist-section">
                    <h4>Que comprend notre devis ?</h4>
                    <ul>
                      <li>Analyse gratuite de votre situation</li>
                      <li>Appel sous 24h avec un expert</li>
                      <li>Devis personnalisé sans engagement</li>
                    </ul>
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
