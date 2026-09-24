import React from 'react';
import PageHero from '../components/PageHero';
import './Ressources.css';

const ressourcesData = [
  {
    id: 1,
    title: 'Guide pour créer votre entreprise',
    description: 'Un guide complet pour vous accompagner dans les étapes de création.',
    link: '/pdfs/creation entreprise.pdf',
    icon: 'fa-file-pdf',
    label: 'PDF',
  },
  {
    id: 2,
    title: 'Modèle de business plan',
    description: 'Téléchargez un modèle de business plan professionnel à remplir.',
    link: '/modeles/Business Plan.docx',
    icon: 'fa-file-word',
    label: 'Word',
  },
  {
    id: 3,
    title: 'FAQ sur la comptabilité',
    description: 'Réponses aux questions les plus courantes sur la gestion comptable.',
    link: '/FAQ.docx',
    icon: 'fa-file-word',
    label: 'Word',
  },
  {
    id: 4,
    title: 'Comprendre le régime de TVA',
    description: 'Informations officielles sur le régime de TVA pour les entreprises.',
    link: 'https://www.economie.gouv.fr/entreprises/regime-tva',
    icon: 'fa-arrow-up-right-from-square',
    label: 'Site officiel',
    external: true,
  },
];

const Ressources = () => (
  <div className="page">
    <title>Ressources | KOF-EXPERTS</title>
    <PageHero
      title="Ressources utiles pour votre entreprise"
      subtitle="Découvrez nos guides, modèles et conseils pour mieux gérer votre projet."
    />

    <section className="section">
      <div className="container">
        <ul className="ressources-list">
          {ressourcesData.map((r) => (
            <li key={r.id} className="resource-item card card-hover">
              <span className="resource-icon">
                <i className={`fas ${r.icon}`} aria-hidden="true"></i>
              </span>
              <div className="resource-body">
                <span className="resource-tag">{r.label}</span>
                <h2>{r.title}</h2>
                <p>{r.description}</p>
              </div>
              <a
                href={encodeURI(r.link)}
                className="btn btn-outline resource-btn"
                target="_blank"
                rel="noopener noreferrer"
                {...(r.external ? {} : { download: true })}
              >
                {r.external ? 'Consulter' : 'Télécharger'}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default Ressources;
