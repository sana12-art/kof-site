import React,  {useState } from 'react';
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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [revenue, setRevenue] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage(null);
  const formData = {
    name,
    phone,
    email,
    revenue,
    page_origin: 'home'
  };

  try {
    const response = await fetch('http://localhost:5000/api/devis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

     const result = await response.json();
      setMessage({ type: 'success', text: result.message });
      setName('');
      setPhone('');
      setEmail('');
      setRevenue('');
    } catch (error) {
    console.error('Erreur:', error);
     setMessage({ type: 'error', text: "Une erreur est survenue, merci d'essayer plus tard." });
  } finally {
    setLoading(false);
  }
};
 
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
            KOF-EXPERTS vous accompagne dans toutes les étapes de la vie de votre entreprise : Comptabilité, Création, Gestion, Conseil Fiscal et juridique, Ressources humaines, Formations et plus encore. Notre équipe d'experts est à vos côtés pour transformer vos idées en réalité.
          </motion.p>

        
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="compact-devis-container">
            <h3 className="compact-form-title">OBTENIR UN DEVIS GRATUIT ET SANS ENGAGEMENT </h3>
          
            <form className="compact-devis-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                required
              />
            
              {message && (
                <p className={message.type === 'error' ? 'error-message' : 'success-message'}>
                  {message.text}
                </p>
              )}
              <button type="submit" className="compact-submit-btn"disabled={loading}>
                 {loading ? 'Envoi en cours...' : 'Demandez votre devis'}
              </button>

              <p className="compact-legal">
                En cliquant sur "Demandez votre devis", vous acceptez d'être contacté par KOF-EXPERTS.
              </p>
            </form>
            
           
          </div>
        </motion.div>
      

        <div className='Reservation'>
          <h2>Bienvenue chez Kof Experts</h2>
           <p>
           Vous cherchez des solutions sur mesure pour répondre à vos défis professionnels ? Nos experts dédiés vous conseillent et vous accompagnent avec des stratégies adaptées à vos objectifs. Ensemble, trouvons la solution qui fera la différence pour votre activité
          </p>
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
               <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="compact-devis-container">
            <h3 className="compact-form-title">OBTENIR UN DEVIS GRATUIT ET SANS ENGAGEMENT </h3>
          
            <form className="compact-devis-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                required
              />

             {message && (
                <p className={message.type === 'error' ? 'error-message' : 'success-message'}>
                  {message.text}
                </p>
              )}
              <button type="submit" className="compact-submit-btn"disabled={loading}>
                 {loading ? 'Envoi en cours...' : 'Demandez votre devis'}
              </button>

              <p className="compact-legal">
                En cliquant sur "Demandez votre devis", vous acceptez d'être contacté par KOF-EXPERTS.
              </p>
            </form>
            
           
          </div>
        </motion.div>

        <motion.div
        className="hero-left bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
 
    <h2 className="text-xl font-bold mb-4">Parlons de votre activité</h2>
    <p className="text-gray-600 mb-6">
      Renseignez vos coordonnées, un conseiller vous contactera rapidement pour préparer notre collaboration.
    </p>

    {/* Points clés */}
    <div className="mb-6 space-y-2">
      <div className="flex items-center">
        <span className="text-green-500 mr-2">✓</span>
        <span>Croissance financière garantie</span>
      </div>
      <div className="flex items-center">
        <span className="text-green-500 mr-2">✓</span>
        <span>Données 100% sécurisées</span>
      </div>
      <div className="flex items-center">
        <span className="text-green-500 mr-2">✓</span>
        <span>Votre succès, notre obsession</span>
      </div>
      <div className="flex items-center text-yellow-500">
        <span>★★★★☆</span>
        <span className="text-gray-600 ml-1">4 sur 5 sur Google</span>
      </div>
    </div>

    
  
      </motion.div>
        <section className="hero-kof">
          <div className="hero-container">
            <h1 className="hero-titre">Accélérez votre croissance avec KOF-EXPERTS <br/>et concentrez-vous pleinement sur votre activité !</h1>
            
            <p className="hero-text">
              Libérez-vous de vos tâches chronophages, gagnez en efficacité et en sérénité.Choisissez notre accompagnement personnalisé pour
              optimiser vos processus 
              administratifs et financiers, afin que vous puissiez vous concentrer sur ce qui 
              compte vraiment : le développement de votre entreprise.
            </p>
            
            <a href="tel:+33153103206" className="hero-cta">
              Appeler un conseiller <span className="cta-arrow">→</span>
            </a>
          </div>
        </section>

      </div>
    </div>
    
  );
};

export default Home;