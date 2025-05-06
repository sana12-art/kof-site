import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import creation from '../assets/creation.png';
import acompagnement from '../assets/acompagnement.png';
import finance from '../assets/finance.png';
import fiscal from '../assets/fiscal.png';
import gestion from '../assets/gestion.png';
import juridique from '../assets/juridique.png';
import rh from '../assets/rh.png';
import comptabilité from '../assets/comptabilité.png';
import formations from '../assets/formations.png';
import { useNavigate,Link } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';


const Home = () => {
  const navigate = useNavigate();
    

  return (
    <div className="main-content">
      <div className="hero-section">
        <div className="hero-left">
          <motion.p
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="hero-subtitle"
          >
            Construire votre succès avec KOF-EXPERTS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="hero-title"
          >
            Propulsez Votre Vision<br /> vers de Nouveaux<br /> Horizons
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, delay: 0.6 }}
            className="hero-description"
          >
            KOF-EXPERTS vous accompagne dans toutes les étapes de la vie de votre entreprise : création, gestion, conseil fiscal et juridique, ressources humaines, formations et plus encore. Notre équipe d'experts est à vos côtés pour transformer vos idées en réalité.
          </motion.p>

          <motion.button
            className="cta-button"
            onClick={() => navigate('/consultation')}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.9 }}
          >
            Réserver une consultation gratuite et sans engagement dès aujourd'hui
          </motion.button>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="compact-devis-container">
            <h3 className="compact-form-title">Obtenir un devis gratuit
            et sans engagement</h3>
            
            <form className="compact-devis-form">
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
    

        <section className="why-section">
          <h2>Pourquoi nous choisir ?</h2>
          <div className="why-cards">
            <div className="card">
              <i className="fas fa-shield-alt"></i>
              <h3>Sécurité</h3>
              <p>Vos données sont protégées avec les dernières technologies de sécurité.</p>
              <Link to="/apropos" className="btn-lire-plus">
                <button 
                  className="more-button" 
                  onClick={() => navigate('/pourquoi')}
                >Lire plus</button>
              </Link>
            </div>
            <div className="card">
              <i className="fas fa-user-tie"></i>
              <h3>Professionnalisme</h3>
              <p>Une équipe expérimentée et dédiée à vos projets.</p>
              <Link to="/apropos" className="btn-lire-plus">
                <button 
                  className="more-button" 
                  onClick={() => navigate('/pourquoi')}
                >Lire plus</button>
              </Link>
            </div>
            <div className="card">
              <i className="fas fa-brain"></i>
              <h3>Expertise</h3>
              <p>Plus de 10 ans d’expérience dans la gestion d’entreprise.</p>
              <Link to="/apropos" className="btn-lire-plus">
                <button 
                  className="more-button" 
                  onClick={() => navigate('/pourquoi')}
                >Lire plus</button>
              </Link>
            </div>
            <div className="card">
              <i className="fas fa-bolt"></i>
              <h3>Réactivité</h3>
              <p>Nous répondons rapidement à vos demandes.</p>
              <Link to="/apropos" className="btn-lire-plus">
                <button 
                  className="more-button" 
                  onClick={() => navigate('/pourquoi')}
                >Lire plus</button>
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>Nos Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src={comptabilité} alt="Comptabilité" className="service-icon" />
              <h3>Comptabilité</h3>
              
              <button 
                className="more-button" 
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </button>

            </div>
            <div className="service-card">
              <img src={creation} alt="Création d’entreprise" className="service-icon" />
              <h3>Création d’entreprise</h3>
              <button 
                className="more-button" 
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </button>
            </div>
            <div className="service-card">
              <img src={fiscal} alt="Conseil fiscal" className="service-icon" />
              <h3>Conseil fiscal</h3>
              <button 
                className="more-button" 
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </button>
            </div>
            <div className="service-card">
              <img src={gestion} alt="Conseil en gestion" className="service-icon" />
              <h3>Conseil en gestion</h3>
              <button 
                className="more-button" 
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </button>
            </div>
            <div className="service-card">
              <img src={finance} alt="Conseil financier" className="service-icon" />
              <h3>Conseil Financier</h3>
              <button 
                className="more-button" 
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </button>
            </div>
            <div className="service-card">
              <img src={juridique} alt="Conseil juridique" className="service-icon" />
              <h3>Conseil Juridique</h3>
              <button 
                className="more-button" 
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </button>
            </div>
            <div className="service-card">
              <img src={rh} alt="RH et Conseil Social" className="service-icon" />
              <h3>RH et Conseil Social</h3>
              <button 
                className="more-button" 
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </button>
            </div>
            <div className="service-card">
              <img src={formations} alt="Formations" className="service-icon" />
              <h3>Formations</h3>
              <button 
                className="more-button" 
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </button>
            </div>
            <div className="service-card">
              <img src={acompagnement} alt="Accompagnement sur mesure" className="service-icon" />
              <h3>Accompagnement sur mesure</h3>
              <button 
                className="more-button" 
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </button>
            </div>
          </div>
        </section>
        

      </div>
    </div>
    
  );
};

export default Home;