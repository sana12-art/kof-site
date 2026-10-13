import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import DevisForm from '../components/DevisForm';
import { CONTACT } from '../config';
import creation from '../assets/creation.png';
import acompagnement from '../assets/acompagnement.png';
import finance from '../assets/finance.png';
import fiscal from '../assets/fiscal.png';
import gestion from '../assets/gestion.png';
import juridique from '../assets/juridique.png';
import rh from '../assets/rh.png';
import comptabilite from '../assets/comptabilité.png';
import formations from '../assets/formations.png';

const reasons = [
  { icon: 'fa-shield-alt', title: 'Sécurité', text: 'Vos données sont protégées avec les dernières technologies de sécurité.' },
  { icon: 'fa-user-tie', title: 'Professionnalisme', text: 'Une équipe expérimentée et dédiée à vos projets.' },
  { icon: 'fa-brain', title: 'Expertise', text: "Une solide expérience dans l'accompagnement et la gestion d'entreprise." },
  { icon: 'fa-bolt', title: 'Réactivité', text: 'Nous répondons rapidement à vos demandes.' },
];

const services = [
  { img: comptabilite, title: 'Comptabilité', to: '/comptabilite' },
  { img: creation, title: "Création d'entreprise", to: '/creation-entreprise' },
  { img: fiscal, title: 'Conseil fiscal', to: '/conseil-fiscal' },
  { img: gestion, title: 'Conseil en gestion', to: '/conseil-gestion' },
  { img: finance, title: 'Conseil financier', to: '/consultation' },
  { img: juridique, title: 'Conseil juridique', to: '/conseil-juridique' },
  { img: rh, title: 'RH et conseil social', to: '/prestation-sociale' },
  { img: formations, title: 'Formations', to: '/formations' },
  { img: acompagnement, title: 'Accompagnement sur mesure', to: '/consultation' },
];

const checks = [
  'Un accompagnement orienté croissance',
  'Données 100 % sécurisées',
  'Votre succès, notre obsession',
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const Home = () => {
  return (
    <div className="page home">
      <title>KOF-EXPERTS | Cabinet d'expertise comptable à Paris</title>

      {/* ---------- Hero ---------- */}
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-text">
            <motion.span className="eyebrow" {...reveal}>
              Construire votre succès avec KOF-EXPERTS
            </motion.span>
            <motion.h1 {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
              Propulsez votre vision vers de nouveaux horizons
            </motion.h1>
            <motion.p className="home-hero-desc" {...reveal} transition={{ ...reveal.transition, delay: 0.2 }}>
              KOF-EXPERTS vous accompagne dans toutes les étapes de la vie de votre entreprise : comptabilité,
              création, gestion, conseil fiscal et juridique, ressources humaines, formations et plus encore.
              Notre équipe d'experts est à vos côtés pour transformer vos idées en réalité.
            </motion.p>

            <motion.ul className="home-checks" {...reveal} transition={{ ...reveal.transition, delay: 0.3 }}>
              {checks.map((c) => (
                <li key={c}>
                  <i className="fas fa-check-circle" aria-hidden="true"></i> {c}
                </li>
              ))}
              <li className="home-rating">
                <span aria-hidden="true">★★★★☆</span> 4 sur 5 sur Google
              </li>
            </motion.ul>

            <motion.div className="home-hero-actions" {...reveal} transition={{ ...reveal.transition, delay: 0.4 }}>
              <Link to="/consultation" className="btn btn-primary">Réserver une consultation gratuite</Link>
              <Link to="/services" className="btn btn-outline">Découvrir nos services</Link>
            </motion.div>
          </div>

          <motion.div
            className="home-hero-form"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <DevisForm origin="home" />
          </motion.div>
        </div>
      </section>

      {/* ---------- Pourquoi nous choisir ---------- */}
      <section className="section">
        <div className="container">
          <motion.div {...reveal}>
            <h2 className="section-title">Pourquoi nous choisir ?</h2>
            <p className="section-lead">
              Des experts à votre écoute pour sécuriser votre gestion et faire grandir votre activité.
            </p>
          </motion.div>

          <div className="why-cards">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                className="why-card card card-hover"
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.08 }}
              >
                <span className="why-icon">
                  <i className={`fas ${r.icon}`} aria-hidden="true"></i>
                </span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <Link to="/apropos" className="text-link">Lire plus <span aria-hidden="true">→</span></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section home-services">
        <div className="container">
          <motion.div {...reveal}>
            <h2 className="section-title">Nos services</h2>
            <p className="section-lead">Une offre complète pour vous accompagner à chaque étape de votre entreprise.</p>
          </motion.div>

          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div key={s.title} {...reveal} transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}>
                <Link to={s.to} className="service-card card card-hover">
                  <img src={s.img} alt="" className="service-icon" loading="lazy" />
                  <h3>{s.title}</h3>
                  <span className="text-link">En savoir plus <span aria-hidden="true">→</span></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Bienvenue / consultation ---------- */}
      <section className="section">
        <div className="container">
          <motion.div className="welcome-card" {...reveal}>
            <h2>Bienvenue chez KOF-EXPERTS</h2>
            <p>
              Vous cherchez des solutions sur mesure pour répondre à vos défis professionnels ? Nos experts dédiés
              vous conseillent et vous accompagnent avec des stratégies adaptées à vos objectifs. Ensemble,
              trouvons la solution qui fera la différence pour votre activité.
            </p>
            <Link to="/consultation" className="btn btn-primary">
              Réserver une consultation gratuite et sans engagement
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- Appel final ---------- */}
      <section className="container final-cta-wrap">
        <motion.div className="final-cta" {...reveal}>
          <h2>Accélérez votre croissance avec KOF-EXPERTS et concentrez-vous pleinement sur votre activité !</h2>
          <p>
            Libérez-vous de vos tâches chronophages, gagnez en efficacité et en sérénité. Choisissez notre
            accompagnement personnalisé pour optimiser vos processus administratifs et financiers, afin que vous
            puissiez vous concentrer sur ce qui compte vraiment : le développement de votre entreprise.
          </p>
          <a href={CONTACT.phoneHref} className="btn btn-light">
            Appeler un conseiller <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
