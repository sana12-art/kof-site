import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroImg from '../assets/photos/hero-legal.jpg';
import { CONTACT, LEGAL } from '../config';
import './Legal.css';

const MentionsLegales = () => {
  const rows = [
    ['Dénomination', LEGAL.companyName],
    ['Forme juridique', LEGAL.legalForm],
    ['Capital social', LEGAL.capital],
    ['SIREN', LEGAL.siren],
    ['Immatriculation', LEGAL.rcs],
    ['TVA intracommunautaire', LEGAL.vatNumber],
    ['Siège social', CONTACT.address],
    ['Téléphone', CONTACT.phone],
    ['Email', CONTACT.email],
    ['Directeur de la publication', LEGAL.publicationDirector],
    ['Inscription à l\'Ordre', LEGAL.orderRegistration],
    ['Assurance responsabilité civile professionnelle', LEGAL.professionalInsurance],
  ].filter(([, value]) => value);

  return (
    <div className="page">
      <title>Mentions légales | KOF-EXPERTS</title>
      <PageHero image={heroImg} label="Informations légales" title="Mentions légales" />

      <section className="section">
        <div className="container legal">
          <h2>Éditeur du site</h2>
          <dl className="legal-list">
            {rows.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <h2>Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com).</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus du site (textes, logos, images, mise en page) est la propriété de {LEGAL.companyName}
            ou de ses partenaires. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation
            écrite préalable est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations publiées sur ce site sont fournies à titre indicatif et ne constituent pas un conseil
            personnalisé. {LEGAL.companyName} s'efforce d'en assurer l'exactitude mais ne peut garantir qu'elles soient
            exhaustives ou à jour. Le site peut contenir des liens vers des sites tiers dont {LEGAL.companyName} n'est pas
            responsable.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement de vos données personnelles est détaillé dans notre{' '}
            <Link to="/confidentialite">politique de confidentialité</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;
