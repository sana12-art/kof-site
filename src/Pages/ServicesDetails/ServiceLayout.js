import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './ServiceDetail.css';

// Cadre commun des fiches services : retour, contenu, appel à l'action.
const ServiceLayout = () => (
  <div className="page service-page">
    <div className="container">
      <Link to="/services" className="service-back">
        <i className="fas fa-arrow-left" aria-hidden="true"></i> Tous nos services
      </Link>

      <Outlet />

      <aside className="service-cta">
        <h2>Un besoin sur ce sujet ?</h2>
        <p>Nos experts vous répondent sous 24h. Première consultation gratuite et sans engagement.</p>
        <div className="service-cta-actions">
          <Link to="/consultation" className="btn btn-light">Réserver une consultation</Link>
          <Link to="/contact" className="btn btn-outline service-cta-outline">Nous contacter</Link>
        </div>
      </aside>
    </div>
  </div>
);

export default ServiceLayout;
