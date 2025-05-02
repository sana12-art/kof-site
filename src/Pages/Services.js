import React from "react";
import "./Services.css";
import imgHeader from "../assets/header-kof.jpg";
import imgCompta from "../assets/compta.jpg";
import imgJuridique from "../assets/juridique.jpg";
import imgRH from "../assets/rh.jpg";
import imgCreation from "../assets/creation.jpg";
import imgFormation from "../assets/formation.jpg";
import imgGestion from "../assets/gestion.jpg";
import imgFinancier from "../assets/financier.jpg";
import imgAccompagnement from "../assets/accompagnement.jpg";

const Services = () => {
  return (
    <div className="services-page">
      {/* Intro */}
      <section className="services-header">
        <div className="services-header-content">
          <h1>Bien plus qu'un cabinet d'expertise comptable, un partenaire d'avenir</h1>
          <p>Le cabinet KOF vous accompagne dans le développement et la croissance de votre activité.</p>
        </div>
        <img src={imgHeader} alt="Partenaire d'avenir" className="header-image" />
      </section>

      {/* Services enrichis */}
      <ServiceBlock
        title="Comptabilité"
        image={imgCompta}
        description="Notre expertise comptable couvre l’ensemble des besoins de votre entreprise, quel que soit son secteur."
        items={[
          "Établissement des comptes annuels & situations intermédiaires",
          "Élaboration de tableaux de bord et budgets prévisionnels",
          "Établissement des déclarations fiscales",
          "Reporting financier, réconciliations interco / BU",
          "Suivi des immobilisations, stocks, fournisseurs, clients",
          "Rattrapages comptables, lettrage et nettoyage des comptes",
        ]}
        reverse
      />

      <ServiceBlock
        title="Conseil Juridique"
        image={imgJuridique}
        description="Nous assurons une assistance juridique adaptée à chaque étape de la vie de votre entreprise."
        items={[
          "Montage juridique adapté à vos projets",
          "Conformité réglementaire et suivi légal",
          "Rédaction de statuts, pactes d'associés",
          "Accompagnement lors des assemblées générales",
          "Veille juridique continue pour anticiper les risques",
        ]}
      />

      <ServiceBlock
        title="Conseil Fiscal"
        image={imgCompta}
        description="Notre cabinet vous aide à optimiser votre fiscalité et à sécuriser vos obligations."
        items={[
          "Optimisation de la charge fiscale de l’entreprise",
          "Déclarations fiscales périodiques et annuelles",
          "Conseils en fiscalité locale et internationale",
          "Assistance lors de contrôles fiscaux",
          "Analyse des régimes d’imposition les plus favorables",
        ]}
        reverse
      />

      <ServiceBlock
        title="RH & Conseil Social"
        image={imgRH}
        description="Une gestion RH efficace pour assurer votre conformité sociale et optimiser vos ressources humaines."
        items={[
          "Gestion administrative du personnel",
          "Contrats de travail, paie et déclarations sociales",
          "Conseil en organisation RH",
          "Assistance lors des conflits sociaux",
          "Audit social et stratégie d’optimisation des charges",
        ]}
      />

      <ServiceBlock
        title="Création d’entreprise"
        image={imgCreation}
        description="Créer son entreprise nécessite un accompagnement sur mesure pour bien démarrer."
        items={[
          "Choix du statut juridique et fiscal",
          "Rédaction des statuts et formalités d’immatriculation",
          "Préparation des business plans",
          "Ouverture des comptes et dépôt du capital",
          "Conseils sur la structure de gouvernance",
        ]}
        reverse
      />

      <ServiceBlock
        title="Formation"
        image={imgFormation}
        description="Nous proposons des formations ciblées pour monter en compétence rapidement sur des sujets clés."
        items={[
          "Formations comptables, fiscales, sociales",
          "Modules sur le pilotage de la performance",
          "Ateliers pratiques et cas concrets",
          "Formations inter-entreprises ou personnalisées",
          "Suivi post-formation et support opérationnel",
        ]}
      />

      <ServiceBlock
        title="Conseil en gestion"
        image={imgGestion}
        description="Un pilotage fin de votre activité pour améliorer vos performances et anticiper vos décisions."
        items={[
          "Mise en place de tableaux de bord et d’indicateurs",
          "Analyse de la rentabilité et des marges",
          "Suivi de trésorerie et budgets prévisionnels",
          "Aide à la prise de décision stratégique",
          "Contrôle budgétaire et ajustements opérationnels",
        ]}
        reverse
      />

      <ServiceBlock
        title="Conseil Financier"
        image={imgFinancier}
        description="Des outils pour mieux financer votre croissance et structurer vos projets."
        items={[
          "Réalisation de plans de financement",
          "Recherche de subventions et aides publiques",
          "Levée de fonds et accompagnement bancaire",
          "Analyse de rentabilité des projets d'investissement",
          "Élaboration de reporting pour les financeurs",
        ]}
      />

      <ServiceBlock
        title="Accompagnement sur mesure"
        image={imgAccompagnement}
        description="Un accompagnement adapté à votre réalité d’entrepreneur, à chaque étape de votre parcours."
        items={[
          "Diagnostic personnalisé de l’entreprise",
          "Déploiement de solutions concrètes et efficaces",
          "Suivi régulier par un expert dédié",
          "Conseils stratégiques sur le long terme",
          "Accompagnement à la transformation digitale",
        ]}
        reverse
      />
    </div>
  );
};

const ServiceBlock = ({ title, image, description, items, reverse }) => (
  <section className={`service-section ${reverse ? "reverse" : ""}`}>
    <img src={image} alt={title} className="service-image" />
    <div className="service-content">
      <h2>{title}</h2>
      {description && <p className="service-description">{description}</p>}
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  </section>
);

export default Services;
