import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [showResources, setShowResources] = useState(false); // State pour gérer l'affichage du sous-menu "Ressources"

    // Fonction pour afficher/masquer le sous-menu "Ressources"
    const toggleResourcesMenu = () => setShowResources(!showResources);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                {/* Logo à gauche */}
                <div className='navbar-logo'>
                    <Link to="/">
                        <img src={logo} alt="Logo KOF" className='logo-img' />
                    </Link>
                </div>

                {/* Liens de navigation au centre */}
                <div className="menu-icon" onClick={toggleMobileMenu}>
                    <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                    <ul className="nav-menu">
                        <li><Link to="/" className="nav-link">Accueil</Link></li>
                        <li><Link to="/services" className="nav-link">Services</Link></li>
                        <li><Link to="/creation-entreprise" className="nav-link">Création d'entreprise</Link></li>
                        <li><Link to="/ressources" className="nav-link">Ressources</Link></li>

                    </ul>

                </div>

                {/* Téléphone + boutons à droite */}
                <div className="navbar-right">
                    <span className="phone-button">01 53 10 32 06</span>
                    <Link to="/contact" className="contact-button">Nous contacter</Link>
                    <Link to="/login" className="auth-icon">
                        <i className="fas fa-user"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
