import React from 'react';

const PageHero = ({ title, subtitle }) => (
  <section className="page-hero">
    <div className="container">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
