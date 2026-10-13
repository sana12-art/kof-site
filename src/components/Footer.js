import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo-kof.png';
import OEC from '../assets/Logo-OEC.svg';
import { CONTACT } from '../config';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="KOF-EXPERTS" className="footer-logo" />
            <p>Cabinet d'expertise comptable, audit et conseil à Paris.</p>
            <div className="footer-social">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <span className="tc-label">Navigation</span>
            <ul className="footer-nav">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/apropos">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/creation-entreprise">Création d'entreprise</Link></li>
              <li><Link to="/ressources">Ressources</Link></li>
              <li><Link to="/consultation">Consultation gratuite</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="tc-label">Coordonnées</span>
            <address>
              {CONTACT.address}
              <br />
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              <br />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </address>
          </div>

          <div className="footer-col">
            <span className="tc-label">Suivez KOF</span>
            <img src={OEC} alt="Ordre des Experts-Comptables" className="footer-oec-logo" />
            <span className="stamp-seal">Réponse sous 24h</span>
          </div>
        </div>

        <hr className="rule footer-divider" />

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} KOF-EXPERTS — Cabinet d'expertise comptable</span>
          <div className="footer-legal">
            <span>
              <Link to="/mentions-legales">Mentions légales</Link> · <Link to="/confidentialite">Confidentialité</Link>
            </span>
            <a className="back-to-top mono" href="#top">
              Retour en haut ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
