import React from 'react';

// En-tête de page. Avec `image`, affiche une photo en fond sous un voile bleu marine.
const PageHero = ({ title, subtitle, image, label }) => (
  <section className={`page-hero${image ? ' page-hero--photo' : ''}`}>
    {image && (
      <>
        <img src={image} alt="" className="page-hero-img" width="1600" height="520" decoding="async" />
        <div className="page-hero-overlay" aria-hidden="true" />
      </>
    )}
    <div className="container page-hero-inner">
      {label && <span className="page-hero-label">{label}</span>}
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
