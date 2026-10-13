import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import heroImg from '../assets/photos/hero-apropos.jpg';
import histoire from '../assets/photos/story-histoire.jpg';
import mission from '../assets/photos/story-mission.jpg';
import oeuvre from '../assets/photos/story-oeuvre.jpg';
import './Apropos.css';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const stories = [
  {
    tag: 'Histoire',
    title: 'Notre histoire',
    img: histoire,
    text: "KOF-EXPERTS a été créée avec une vision claire : offrir des solutions de conseil et de formation adaptées aux besoins évolutifs des entreprises. Nous avons élargi notre portefeuille de services pour répondre aux défis complexes, tout en restant fidèles à nos valeurs fondamentales : intégrité, excellence et engagement envers nos clients.",
    quote: '« Intégrité, excellence et engagement envers nos clients. »',
  },
  {
    tag: 'Mission',
    title: 'Notre mission',
    img: mission,
    text: "Notre vocation première est d'accompagner nos clients vers la réussite en leur proposant des solutions totalement adaptées et innovantes. Nous croyons en la puissance de l'innovation et de la personnalisation pour façonner l'avenir des affaires.",
    quote: null,
    reverse: true,
  },
  {
    tag: 'Œuvre',
    title: 'Notre œuvre',
    img: oeuvre,
    text: "Chez KOF-EXPERTS, notre mission est de transformer les défis en opportunités. Nous fournissons des solutions sur mesure qui répondent aux besoins de nos clients et les dépassent, de la conception de plans d'affaires à la réinvention des processus.",
    quote: null,
  },
];

const values = [
  { label: '01 · Expérience', title: 'Nos engagements', text: "Des décennies d'expérience dans le conseil et la formation, au service d'une nouvelle génération d'entreprises compétentes et prospères." },
  { label: '02 · Conviction', title: 'Philosophie', text: 'La compétence est le pilier fondamental de toute entreprise florissante : nous transformons la connaissance en actions concrètes.' },
  { label: '03 · Sur mesure', title: 'Approche personnalisée', text: "Nous croyons en l'unicité de chaque entreprise et proposons des solutions adaptées aux objectifs de chacun." },
];

function Apropos() {
  return (
    <div className="page">
      <title>À propos | KOF-EXPERTS</title>
      <PageHero
        image={heroImg}
        crumb="À propos"
        label="Le cabinet"
        title="Votre guide vers l'excellence entrepreneuriale"
        subtitle="Notre engagement envers l'excellence et l'innovation définit notre approche du conseil et de la formation depuis plus de 25 ans."
      />

      <section className="section">
        <div className="container apropos-intro">
          <motion.p {...reveal}>
            Nous croyons fermement que la connaissance est la clé du pouvoir dans un monde en constante évolution.
            Cependant, la véritable valeur réside dans la capacité à transformer cette connaissance en compétences
            pratiques et en actions concrètes — l'approche qui propulse les entreprises vers de nouveaux sommets
            d'efficacité, de compétitivité et de réussite durable.
          </motion.p>
        </div>
      </section>

      {stories.map((s, i) => (
        <section key={s.title} className="section apropos-story">
          <div className="container">
            {i > 0 && <hr className="rule" style={{ marginBottom: 64 }} />}
            <motion.div className={`concept${s.reverse ? ' concept-reverse' : ''}`} {...reveal}>
              <div className="concept-figure">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div>
                <span className="eyebrow">{s.tag}</span>
                <h2 style={{ marginTop: 10 }}>{s.title}</h2>
                <p>{s.text}</p>
                {s.quote && <blockquote>{s.quote}</blockquote>}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section aria-label="Nos valeurs">
        <div className="container section-head">
          <div>
            <span className="eyebrow">Nos valeurs</span>
            <h2>Une même exigence, trois piliers</h2>
          </div>
        </div>
        <div className="totals-row container">
          {values.map((v) => (
            <div key={v.title} className="totals-col">
              <span className="tc-label">{v.label}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta-wrap container">
        <motion.div className="final-cta" {...reveal}>
          <span className="eyebrow">KOF-EXPERTS</span>
          <h2>Prêt à débuter votre aventure ?</h2>
          <p>
            Rejoignez-nous pour transformer vos idées en succès et façonner l'avenir de votre entreprise avec
            KOF-EXPERTS.
          </p>
          <div className="apropos-cta-actions">
            <Link to="/contact" className="btn btn-primary">Je me lance</Link>
            <Link to="/services" className="btn btn-light">Découvrir nos services</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Apropos;
