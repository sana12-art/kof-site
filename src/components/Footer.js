import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo-kof.png';
import OEC from '../assets/Logo-OEC.svg';
import { CONTACT } from '../config';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="KOF-EXPERTS" className="footer-logo" />
          <p>Conseils personnalisés, réussites partagées. Votre cabinet d'expertise comptable à Paris.</p>
        </div>

        <nav className="footer-col" aria-label="Pied de page">
          <h4>Navigation</h4>
          <Link to="/">Accueil</Link>
          <Link to="/services">Nos services</Link>
          <Link to="/creation-entreprise">Création d'entreprise</Link>
          <Link to="/ressources">Ressources</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/consultation">Consultation gratuite</Link>
        </nav>

        <div className="footer-col">
          <h4>Contactez KOF</h4>
          <p>
            <i className="fas fa-phone" aria-hidden="true"></i>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          </p>
          <p>
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
          <p>
            <i className="fas fa-location-dot" aria-hidden="true"></i>
            <span>{CONTACT.address}</span>
          </p>
        </div>

        <div className="footer-col">
          <h4>Suivez KOF</h4>
          <div className="footer-social-icons">
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </div>
          <img src={OEC} alt="Ordre des Experts-Comptables" className="footer-oec-logo" />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} KOF-EXPERTS. Tous droits réservés.</span>
          <span className="footer-legal">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
