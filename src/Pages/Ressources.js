import React from 'react';
import './Ressources.css';

const ressourcesData = [
  {
    id: 1,
    title: "Guide pour créer votre entreprise",
    description: "Un guide complet pour vous accompagner dans les étapes de création.",
    link: "/pdfs/creation entreprise.pdf"
  },
  {
    id: 2,
    title: "Modèle de business plan",
    description: "Téléchargez un modèle de business plan professionnel à remplir.",
    link: "/modeles/Business Plan.docx"
  },
  {
    id: 3,
    title: "FAQ sur la comptabilité",
    description: "Réponses aux questions les plus courantes sur la gestion comptable.",
    link: "/FAQ.docx"
  }
];

const Ressources = () => {
  return (
    <div className="ressources-container">
      <h1>Ressources utiles pour votre entreprise</h1>
      <p>Découvrez nos guides, modèles et conseils pour mieux gérer votre projet.</p>

      <ul className="ressources-list">
        {ressourcesData.map(resource => (
          <li key={resource.id} className="resource-item">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          <a href={resource.link}
            className="download-link"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger 
          </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ressources;