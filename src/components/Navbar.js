import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-kof.png';
import { CONTACT } from '../config';

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/apropos', label: 'À propos' },
  { to: '/services', label: 'Services' },
  { to: '/creation-entreprise', label: "Création d'entreprise" },
  { to: '/ressources', label: 'Ressources' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Empêche le défilement de la page derrière le menu ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header id="top" className="navbar">
      <div className="container navbar-row">
        <Link to="/" className="navbar-logo" aria-label="KOF-EXPERTS - Accueil">
          <img src={logo} alt="KOF-EXPERTS" className="logo-img" />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          <span className="burger" aria-hidden="true"></span>
        </button>

        <nav id="main-nav" className={`navbar-links ${open ? 'open' : ''}`} aria-label="Navigation principale">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {label}
            </NavLink>
          ))}
          <a href={CONTACT.phoneHref} className="nav-phone mono">
            {CONTACT.phone}
          </a>
          <Link to="/consultation" className="btn btn-primary navbar-cta">
            Consultation gratuite
          </Link>
        </nav>
      </div>
      {open && <div className="navbar-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
};

export default Navbar;
