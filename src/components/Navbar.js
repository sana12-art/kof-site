import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import DropdownMenu from '../Pages/DropdownMenu'; // Si tu veux un menu déroulant

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
                        
                        {/* Dropdown Resources */}
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle">Ressources</span>
                            <div className="dropdown-menu">
                                <Link to="/blog" className="dropdown-item">Blog</Link>
                                <Link to="/centre-aide" className="dropdown-item">Centre d’aide</Link>
                                <Link to="/smile-your-planet" className="dropdown-item">Smile Your Planet</Link>
                                <Link to="/webinar" className="dropdown-item">Webinar</Link>
                                <Link to="/presse" className="dropdown-item">Presse</Link>
                            </div>
                        </li>
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
