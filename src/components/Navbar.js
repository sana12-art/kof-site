import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-kof.png';
import { CONTACT } from '../config';

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/services', label: 'Services' },
  { to: '/creation-entreprise', label: "Création d'entreprise" },
  { to: '/ressources', label: 'Ressources' },
  { to: '/apropos', label: 'À propos' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Empêche le défilement de la page derrière le menu ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="KOF-EXPERTS - Accueil">
          <img src={logo} alt="KOF-EXPERTS" className="logo-img" />
        </Link>

        <button
          type="button"
          className="menu-icon"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          <i className={open ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"></i>
        </button>

        <nav id="main-nav" className={`navbar-links ${open ? 'mobile-menu' : ''}`} aria-label="Navigation principale">
          <ul className="nav-menu">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar-right">
            <a href={CONTACT.phoneHref} className="phone-button">
              <i className="fas fa-phone" aria-hidden="true"></i> {CONTACT.phone}
            </a>
            <Link to="/consultation" className="contact-button">
              Consultation gratuite
            </Link>
          </div>
        </nav>
      </div>
      {open && <div className="navbar-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
};

export default Navbar;
