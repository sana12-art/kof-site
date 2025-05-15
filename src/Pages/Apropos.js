import React from 'react';
import './Apropos.css';
import { Link } from 'react-router-dom';
import kof from '../assets/kof.jpg';
import histoire from '../assets/histoire.jpg';
import mission from '../assets/mission.jpg';
import oeuvre from '../assets/oeuvre.jpg';

function Apropos() {
  return (
    <div className="apropos-container">

      <section className="intro-section">
        <h1 className="main-title">KOF-EXPERTS, Votre Guide vers l'Excellence Entrepreneuriale</h1>
      </section>

      <section className="text-image-section">
        <div className="text-content">
          <p>
            Chez KOF-EXPERTS, notre engagement envers l’excellence et l’innovation définit notre approche du conseil et de la formation depuis plus de 25 ans.
            Nous croyons fermement que la connaissance est la clé du pouvoir dans un monde en constante évolution.
            Cependant, nous comprenons également que la véritable valeur réside dans la capacité à transformer cette connaissance en compétences pratiques et en actions concrètes.
            C’est cette approche holistique qui propulse les entreprises vers de nouveaux sommets d’efficacité, de compétitivité et de réussite durable.
          </p>
        </div>
        <div className="image-placeholder">
        <img src={kof} alt="KOF" className="kof-apropos" />
        </div>
      </section>

      <section className="highlight-section">
        <h3 className="highlight-title">Ce qui nous distingue :</h3>
        <p className="highlight-text">
          Chez KOF-EXPERTS, notre différence réside dans notre engagement envers l’innovation constante et la personnalisation.
          Nous adaptons nos stratégies et nos conseils pour répondre aux besoins spécifiques de chaque entreprise.
        </p>
      </section>

      <section className="text-image-section reverse">
        <div className="image-placeholder">
        <img src={histoire} alt="KOF" className="histoire-apropos" />

        </div>
        <div className="text-content">
          <h3>Notre Histoire</h3>
          <p>
             KOF-EXPERTS a été créée en avec une vision claire : offrir des solutions de conseil et de formation adaptées aux besoins évolutifs des entreprises.
            Nous avons élargi notre portefeuille de services pour répondre aux défis complexes, tout en restant fidèles à nos valeurs fondamentales : intégrité, excellence et engagement envers nos clients.
          </p>
        </div>
      </section>

      <section className="text-image-section">
        <div className="text-content">
          <h3>Notre Mission</h3>
          <p>
            Notre vocation première est d’accompagner nos clients vers la réussite en leur proposant des solutions totalement adaptées et innovantes.
            Nous croyons en la puissance de l’innovation et de la personnalisation pour façonner l’avenir des affaires.
          </p>
        </div>
        <div className="image-placeholder">
        <img src={mission} alt="KOF" className="histoire-apropos" />
        </div>
      </section>

      <section className="text-image-section reverse">
        <div className="image-placeholder">
        <img src={oeuvre} alt="KOF" className="histoire-apropos" />
        </div>
        <div className="text-content">
          <h3>Notre Œuvre</h3>
          <p>
            Chez KOF-EXPERTS, notre mission est de transformer les défis en opportunités. Nous fournissons des solutions sur mesure
            qui répondent aux besoins de nos clients et les dépassent.
            De la conception de plans d’affaires à la réinvention des processus, chaque action est une étape vers l’extraordinaire.
          </p>
        </div>
      </section>

      <section className="highlight-section">
        <h3 className="highlight-title">Notre Approche et Nos Engagements</h3>
        <p className="highlight-text">
          Notre approche repose sur des décennies d’expérience dans le conseil et la formation.
          Nous visons à construire une nouvelle génération d’entreprises compétentes et prospères.
        </p>
      </section>

      <section className="highlight-section">
        <h3 className="highlight-title">Philosophie</h3>
        <p className="highlight-text">
          Notre philosophie repose sur la conviction que la compétence est le pilier fondamental de toute entreprise florissante.
          Nous transformons la connaissance en compétences pratiques pour nos clients.
        </p>
      </section>

      <section className="highlight-section">
        <h3 className="highlight-title">Approche Personnalisée</h3>
        <p className="highlight-text">
          Chez KOF-EXPERTS, nous croyons en l’unicité de chaque entreprise. Nous proposons des solutions sur mesure adaptées aux objectifs uniques de chacun.
        </p>
      </section>

      <section className="call-to-action">
        <h2 className="cta-title">Pionnier en Conseil et Formation d'Entreprise</h2>
        <Link to="/services" className="cta-button">Découvrir nos services</Link>
      </section>

      <section className="call-to-action join-us">
        <h2 className="cta-title">Prêt à débuter votre aventure ?</h2>
        <p className="cta-subtext">Rejoignez-nous pour transformer vos idées en succès et façonner l'avenir de votre entreprise avec KOF-EXPERTS Management Dynamique.</p>
        <Link to="/contact" className="cta-button secondary">Je me lance</Link>
      </section>

    </div>
  );
}

export default Apropos;
