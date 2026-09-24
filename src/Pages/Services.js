import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import heroImg from '../assets/photos/hero-services.jpg';
import DevisForm from '../components/DevisForm';
import { CONTACT } from '../config';
import './Services.css';

const services = [
  { title: 'Comptabilité', to: '/comptabilite', icon: 'fa-calculator', text: 'Tenue, bilan et déclarations en toute conformité.' },
  { title: "Création d'entreprise", to: '/creation-entreprise', icon: 'fa-rocket', text: 'Choix du statut et formalités de lancement.' },
  { title: 'Conseil fiscal', to: '/conseil-fiscal', icon: 'fa-file-invoice-dollar', text: 'Optimisez votre fiscalité en toute sécurité.' },
  { title: 'Paie', to: '/paie', icon: 'fa-money-check-dollar', text: 'Bulletins de salaire et déclarations sociales.' },
  { title: 'Conseil en gestion', to: '/conseil-gestion', icon: 'fa-chart-line', text: 'Pilotez votre rentabilité et votre trésorerie.' },
  { title: 'Conseil juridique', to: '/conseil-juridique', icon: 'fa-scale-balanced', text: 'Statuts, contrats et vie juridique de la société.' },
  { title: 'Prestation sociale', to: '/prestation-sociale', icon: 'fa-users', text: 'Accompagnement RH et obligations sociales.' },
  { title: 'Formations', to: '/formations', icon: 'fa-graduation-cap', text: 'Montez en compétences sur la gestion de votre activité.' },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const Services = () => (
  <div className="page">
    <title>Nos services | KOF-EXPERTS</title>
    <PageHero
      image={heroImg}
      label="Nos services"
      title="Un accompagnement comptable sur mesure"
      subtitle="Du lancement de votre activité à son développement, nos experts vous accompagnent."
    />

    <section className="section">
      <div className="container">
        <div className="services-list">
          {services.map((s, i) => (
            <motion.div key={s.to} {...reveal} transition={{ ...reveal.transition, delay: (i % 4) * 0.06 }}>
              <Link to={s.to} className="service-tile card card-hover">
                <span className="service-tile-icon">
                  <i className={`fas ${s.icon}`} aria-hidden="true"></i>
                </span>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                <span className="text-link">En savoir plus <span aria-hidden="true">→</span></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section services-quote">
      <div className="container services-quote-grid">
        <motion.div {...reveal}>
          <h2 className="quote-title">Que comprend notre devis ?</h2>
          <ul className="quote-list">
            <li><i className="fas fa-check-circle" aria-hidden="true"></i> Analyse gratuite de votre situation</li>
            <li><i className="fas fa-check-circle" aria-hidden="true"></i> Appel sous 24h avec un expert</li>
            <li><i className="fas fa-check-circle" aria-hidden="true"></i> Devis personnalisé sans engagement</li>
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
