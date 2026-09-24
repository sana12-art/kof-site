import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import histoire from '../assets/histoire.jpg';
import mission from '../assets/mission.jpg';
import oeuvre from '../assets/oeuvre.jpg';
import './Apropos.css';

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const stories = [
  {
    title: 'Notre Histoire',
    img: histoire,
    text: "KOF-EXPERTS a été créée avec une vision claire : offrir des solutions de conseil et de formation adaptées aux besoins évolutifs des entreprises. Nous avons élargi notre portefeuille de services pour répondre aux défis complexes, tout en restant fidèles à nos valeurs fondamentales : intégrité, excellence et engagement envers nos clients.",
  },
  {
    title: 'Notre Mission',
    img: mission,
    text: "Notre vocation première est d'accompagner nos clients vers la réussite en leur proposant des solutions totalement adaptées et innovantes. Nous croyons en la puissance de l'innovation et de la personnalisation pour façonner l'avenir des affaires.",
  },
  {
    title: 'Notre Œuvre',
    img: oeuvre,
    text: "Chez KOF-EXPERTS, notre mission est de transformer les défis en opportunités. Nous fournissons des solutions sur mesure qui répondent aux besoins de nos clients et les dépassent. De la conception de plans d'affaires à la réinvention des processus, chaque action est une étape vers l'extraordinaire.",
  },
];

const values = [
  {
    icon: 'fa-lightbulb',
    title: 'Notre approche et nos engagements',
    text: "Notre approche repose sur des décennies d'expérience dans le conseil et la formation. Nous visons à construire une nouvelle génération d'entreprises compétentes et prospères.",
  },
  {
    icon: 'fa-compass',
    title: 'Philosophie',
    text: "Notre philosophie repose sur la conviction que la compétence est le pilier fondamental de toute entreprise florissante. Nous transformons la connaissance en compétences pratiques pour nos clients.",
  },
  {
    icon: 'fa-handshake',
    title: 'Approche personnalisée',
    text: "Chez KOF-EXPERTS, nous croyons en l'unicité de chaque entreprise. Nous proposons des solutions sur mesure adaptées aux objectifs uniques de chacun.",
  },
];

function Apropos() {
  return (
    <div className="page">
      <title>À propos | KOF-EXPERTS</title>
      <PageHero
        title="KOF-EXPERTS, votre guide vers l'excellence entrepreneuriale"
        subtitle="Notre engagement envers l'excellence et l'innovation définit notre approche du conseil et de la formation."
      />

      <section className="section">
        <div className="container apropos-intro">
          <motion.p {...reveal}>
            Nous croyons fermement que la connaissance est la clé du pouvoir dans un monde en constante évolution.
            Cependant, la véritable valeur réside dans la capacité à transformer cette connaissance en compétences
            pratiques et en actions concrètes. C'est cette approche globale qui propulse les entreprises vers de
            nouveaux sommets d'efficacité, de compétitivité et de réussite durable.
          </motion.p>
          <motion.div className="apropos-distinct" {...reveal}>
            <h2>Ce qui nous distingue</h2>
            <p>
              Notre différence réside dans notre engagement envers l'innovation constante et la personnalisation.
              Nous adaptons nos stratégies et nos conseils pour répondre aux besoins spécifiques de chaque entreprise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section apropos-stories">
        <div className="container">
          {stories.map((s, i) => (
            <motion.article key={s.title} className={`story ${i % 2 ? 'reverse' : ''}`} {...reveal}>
              <img src={s.img} alt={s.title} loading="lazy" />
              <div>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card card card-hover"
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.1 }}
              >
                <span className="value-icon"><i className={`fas ${v.icon}`} aria-hidden="true"></i></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container apropos-cta-wrap">
        <motion.div className="apropos-cta" {...reveal}>
          <h2>Prêt à débuter votre aventure ?</h2>
          <p>
            Rejoignez-nous pour transformer vos idées en succès et façonner l'avenir de votre entreprise avec
            KOF-EXPERTS.
          </p>
          <div className="apropos-cta-actions">
            <Link to="/contact" className="btn btn-light">Je me lance</Link>
            <Link to="/services" className="btn btn-outline apropos-cta-outline">Découvrir nos services</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Apropos;
