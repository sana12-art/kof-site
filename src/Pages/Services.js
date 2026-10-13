import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import DevisForm from '../components/DevisForm';
import heroImg from '../assets/photos/hero-services.jpg';
import { CONTACT } from '../config';
import './Services.css';

const services = [
  { num: '01', tag: 'Expertise', title: 'Comptabilité', to: '/comptabilite', text: 'Tenue, bilan et déclarations en toute conformité, avec une analyse continue de votre activité.' },
  { num: '02', tag: 'Lancement', title: "Création d'entreprise", to: '/creation-entreprise', text: 'Choix du statut, rédaction des statuts et formalités de création, de A à Z.' },
  { num: '03', tag: 'Fiscalité', title: 'Conseil fiscal', to: '/conseil-fiscal', text: 'Optimisez votre fiscalité en toute sécurité, à chaque étape de votre développement.' },
  { num: '04', tag: 'Social', title: 'Paie', to: '/paie', text: 'Édition des bulletins, déclarations URSSAF et conformité légale.' },
  { num: '05', tag: 'Pilotage', title: 'Conseil en gestion', to: '/conseil-gestion', text: 'Analyse des coûts, suivi de performance et gestion de trésorerie.' },
  { num: '06', tag: 'Droit', title: 'Conseil juridique', to: '/conseil-juridique', text: 'Statuts, contrats et vie juridique de la société, sécurisés par nos experts.' },
  { num: '07', tag: 'RH', title: 'Prestation sociale', to: '/prestation-sociale', text: 'Accompagnement RH et obligations sociales de votre entreprise.' },
  { num: '08', tag: 'Compétences', title: 'Formations', to: '/formations', text: 'Montez en compétences sur la gestion de votre activité.' },
];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

const Services = () => (
  <div className="page">
    <title>Nos services | KOF-EXPERTS</title>
    <PageHero
      image={heroImg}
      crumb="Services"
      label="Nos missions"
      title="Des offres sur mesure, poste par poste"
      subtitle="Expertise, fiscalité, gestion, juridique, social et formation : une offre complète pour couvrir l'ensemble des enjeux de votre activité."
    />

    <section className="section">
      <div className="container">
        <div className="ledger-list">
          {services.map((s, i) => (
            <motion.div key={s.to} {...reveal} transition={{ ...reveal.transition, delay: (i % 4) * 0.05 }}>
              <Link to={s.to} className="ledger-item">
                <span className="li-num">{s.num}</span>
                <div>
                  <span className="li-tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                </div>
                <p>
                  {s.text} <span className="li-arrow mono">→</span>
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section services-quote">
      <div className="container services-quote-grid">
        <motion.div {...reveal}>
          <span className="eyebrow">Devis gratuit</span>
          <h2 style={{ marginTop: 10 }}>Que comprend notre devis ?</h2>
          <ul className="quote-list">
            <li>Analyse gratuite de votre situation</li>
            <li>Appel sous 24h avec un expert</li>
            <li>Devis personnalisé sans engagement</li>
          </ul>
          <p className="quote-call">
            Vous préférez en parler ? Appelez-nous au <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
          </p>
        </motion.div>
        <motion.div className="quote-form" {...reveal}>
          <DevisForm origin="services" />
        </motion.div>
      </div>
    </section>
  </div>
);

export default Services;
