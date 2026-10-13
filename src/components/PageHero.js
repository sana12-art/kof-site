import React from 'react';
import { Link } from 'react-router-dom';

// En-tête de page. Avec `image`, affiche une photo en fond sous un voile encre.
const PageHero = ({ title, subtitle, image, label, crumb }) => (
  <section className={`page-hero${image ? ' page-hero--photo' : ''}`}>
    {image && (
      <>
        <img src={image} alt="" className="page-hero-img" width="1600" height="520" decoding="async" />
        <div className="page-hero-overlay" aria-hidden="true" />
      </>
    )}
    <div className="container page-hero-inner">
      {crumb && (
        <span className="page-hero-crumb">
          <Link to="/">Accueil</Link> / {crumb}
        </span>
      )}
      {label && <span className="eyebrow">{label}</span>}
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
