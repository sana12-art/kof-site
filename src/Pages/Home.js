import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import DevisForm from '../components/DevisForm';
import { CONTACT } from '../config';
import heroImg from '../assets/photos/hero-services.jpg';
import conceptImg from '../assets/photos/hero-apropos.jpg';

const missions = [
  { num: '01', tag: 'Comptabilité', title: 'Expertise comptable', to: '/comptabilite', text: 'Tenue, bilan, déclarations et conformité, avec une analyse continue de votre activité.' },
  { num: '02', tag: "Lancement", title: "Création d'entreprise", to: '/creation-entreprise', text: 'Choix du statut, formalités et accompagnement de A à Z pour démarrer sereinement.' },
  { num: '03', tag: 'Fiscalité', title: 'Conseil fiscal', to: '/conseil-fiscal', text: 'Optimisez votre fiscalité en toute sécurité, à chaque étape de votre développement.' },
  { num: '04', tag: 'Pilotage', title: 'Conseil en gestion', to: '/conseil-gestion', text: 'Analyse des coûts, trésorerie et tableaux de bord pour piloter votre rentabilité.' },
  { num: '05', tag: 'Droit', title: 'Conseil juridique', to: '/conseil-juridique', text: 'Statuts, contrats et vie juridique de la société, sécurisés par nos experts.' },
];

const atouts = [
  { label: '01 · Fiabilité', title: 'Sécurité', text: 'Vos données sont protégées avec les dernières technologies de sécurité.' },
  { label: '02 · Disponibilité', title: 'Professionnalisme', text: 'Une équipe expérimentée et dédiée à vos projets.' },
  { label: '03 · Savoir-faire', title: 'Expertise', text: "Une solide expérience dans l'accompagnement et la gestion d'entreprise." },
  { label: '04 · Engagement', title: 'Réactivité', text: 'Nous répondons rapidement à vos demandes.' },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const Home = () => {
  return (
    <div className="page home">
      <title>KOF-EXPERTS | Cabinet d'expertise comptable à Paris</title>

      {/* ---------- Hero ---------- */}
      <section className="page-hero page-hero--photo home-hero">
        <img src={heroImg} alt="" className="page-hero-img" decoding="async" />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="container page-hero-inner home-hero-inner">
          <div className="home-hero-copy">
            <span className="eyebrow">Expertise comptable · Audit · Conseil · Formation</span>
            <h1>
              Une connaissance <em>parfaite</em> de votre activité.
            </h1>
            <p className="home-hero-lead">
              KOF-EXPERTS accompagne dirigeants, indépendants et professions libérales avec des offres sur mesure —
              de la tenue comptable à la stratégie de financement.
            </p>
            <div className="home-hero-ctas">
              <Link to="/consultation" className="btn btn-primary">Nous contacter</Link>
              <Link to="/services" className="btn btn-light">Nos missions</Link>
            </div>
            <div className="home-hero-meta mono">
              <span>Paris (75017)</span>
              <span>5 missions</span>
              <span>Réponse sous 24h</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule-thick" />

      {/* ---------- Nos missions ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Nos missions</span>
              <h2>Des offres sur mesure, poste par poste</h2>
            </div>
            <Link to="/services" className="section-head-link mono">Voir tous les services →</Link>
          </div>

          <div className="ledger-list">
            {missions.map((m, i) => (
              <motion.div key={m.to} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }}>
                <Link to={m.to} className="ledger-item">
                  <span className="li-num">{m.num}</span>
                  <div>
                    <span className="li-tag">{m.tag}</span>
                    <h3>{m.title}</h3>
                  </div>
                  <p>
                    {m.text} <span className="li-arrow mono">→</span>
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Le concept ---------- */}
      <section className="section home-concept">
        <div className="container">
          <hr className="rule" style={{ marginBottom: 64 }} />
          <motion.div className="concept" {...reveal}>
            <div className="concept-figure">
              <img src={conceptImg} alt="Équipe KOF-EXPERTS au travail" loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">Le concept</span>
              <h2 style={{ marginTop: 10 }}>Un cabinet à taille humaine, une seule adresse</h2>
              <p>
                Vous cherchez des solutions sur mesure pour répondre à vos défis professionnels ? Nos experts
                dédiés vous conseillent et vous accompagnent avec des stratégies adaptées à vos objectifs, pour que
                vous puissiez vous concentrer sur ce qui compte vraiment.
              </p>
              <blockquote>« Ensemble, trouvons la solution qui fera la différence pour votre activité. »</blockquote>
              <p style={{ marginTop: 18 }}>
                <Link to="/apropos" className="btn btn-outline">En savoir plus sur le cabinet</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Nos atouts ---------- */}
      <section aria-label="Nos atouts">
        <div className="container section-head">
          <div>
            <span className="eyebrow">Nos atouts</span>
            <h2>Pourquoi nous choisir ?</h2>
          </div>
        </div>
        <div className="totals-row totals-row--4 container">
          {atouts.map((a) => (
            <div key={a.title} className="totals-col">
              <span className="tc-label">{a.label}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Devis ---------- */}
      <section className="section home-devis">
        <div className="container home-devis-grid">
          <motion.div {...reveal}>
            <span className="eyebrow">Devis gratuit</span>
            <h2 style={{ marginTop: 10 }}>Obtenez votre devis en 2 minutes</h2>
            <p className="home-devis-text">
              Analyse gratuite de votre situation, appel sous 24h avec un expert et devis personnalisé sans
              engagement.
            </p>
            <ul className="home-devis-list">
              <li>Analyse gratuite de votre situation</li>
              <li>Appel sous 24h avec un expert</li>
              <li>Devis personnalisé sans engagement</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <DevisForm origin="home" />
          </motion.div>
        </div>
      </section>

      {/* ---------- Appel final ---------- */}
      <section className="final-cta-wrap container">
        <motion.div className="final-cta" {...reveal}>
          <span className="eyebrow">KOF-EXPERTS</span>
          <h2>Accélérez votre croissance et concentrez-vous sur votre activité</h2>
          <p>
            Libérez-vous de vos tâches chronophages, gagnez en efficacité et en sérénité grâce à un accompagnement
            personnalisé.
          </p>
          <a href={CONTACT.phoneHref} className="btn btn-light">
            Appeler un conseiller →
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
