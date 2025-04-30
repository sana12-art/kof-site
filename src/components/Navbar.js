import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import DropdownMenu from '../Pages/DropdownMenu'; // ✅ bon chemin relatif à src/components/Navbar.js

const Navbar = () => {
    return (
        <nav className='navbar'>
     
      <div className='navbar-container'>
                <div className='navbar-logo'>
                    <Link to="/">
                        <img src={logo} alt="Logo KOF" className='logo-img' />
                    </Link>
                </div>

                {/* Liens au centre */}
                <nav className="navbar">
                    <ul className="nav-menu">
                        <li><Link to="/" className="nav-link">Accueil</Link></li>
                        <li><Link to="/services" className="nav-link">Services</Link></li>
                        <li><Link to="/creation-entreprise" className="nav-link">Création d'entreprise</Link></li>
                    </ul>
                </nav>


                {/* Téléphone + bouton + icône à droite */}
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
