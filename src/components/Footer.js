import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import OEC from '../assets/Logo-OEC.svg';

const Footer = () => {
  return (
    <footer>
        <div className="footer-section">
            <img src={logo} alt="Logo KOF" className="footer-logo" />
            <h1 className="text">Conseils<br />personnalisés,<br />Réussites<br />partagées</h1>
        </div>

        <div className="footer-links">
            <h4>Menu</h4>
            <a href="/">Accueil</a>
            <a href="/services">Services</a>
            <a href="/ressources">Ressources</a>
            <a href="/decouvrir-kof">Découvrir KOF</a>
        </div>

        <div className="footer-social">
            <h4>Suivez KOF</h4>
            <div className="footer-social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <img src={OEC} alt="Logo Experts-Comptables" className="footer-oec-logo" />

        </div>
            
        <div className="footer-contact">
            <h4>Contactez KOF</h4>
            <p>contact@kof.com</p>
        </div>
        
    </footer>

  );
};

export default Footer;
