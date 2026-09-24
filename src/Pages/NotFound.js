import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page section">
    <title>Page introuvable | KOF-EXPERTS</title>
    <div className="container" style={{ textAlign: 'center' }}>
      <p className="eyebrow">Erreur 404</p>
      <h1 className="section-title">Cette page n'existe pas</h1>
      <p className="section-lead" style={{ marginBottom: 32 }}>
        Le lien est peut-être incorrect ou la page a été déplacée.
      </p>
      <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
    </div>
  </div>
);

export default NotFound;
