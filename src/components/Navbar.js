import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import OEC from '../assets/Logo-OEC.svg';

const Navbar = () => {
    const [showResources, setShowResources] = useState(false);
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

                {/* Menu mobile */}
                <div className="menu-icon" onClick={toggleMobileMenu} aria-label="Menu mobile">
                    <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                {/* Liens de navigation */}
                <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                    <ul className="nav-menu">
                        <li><Link to="/" className="nav-link">Accueil</Link></li>
                        <li><Link to="/services" className="nav-link">Services</Link></li>
                        <li><Link to="/creation-entreprise" className="nav-link">Création d'entreprise</Link></li>
                        <li>
                            <Link 
                                to="/ressources" 
                                className="nav-link"
                                onMouseEnter={() => setShowResources(true)}
                                onMouseLeave={() => setShowResources(false)}
                            >
                                Ressources
                            </Link>
                            {showResources && (
                                <ul className="resources-submenu">
                                    <li><Link to="/ressources/guides">Guides</Link></li>
                                    <li><Link to="/ressources/outils">Outils</Link></li>
                                </ul>
                            )}
                        </li>
                     
                    </ul>
                </div>

                {/* Section contact */}
                <div className="navbar-right">
                    <a href="tel:0153103206" className="phone-button">01 53 10 32 06</a>
                    <Link to="/contact" className="contact-button">Nous contacter</Link>
                    <Link to="/login" className="auth-icon" aria-label="Connexion">
                        <i className="fas fa-user"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;