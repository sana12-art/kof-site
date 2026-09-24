// Point unique pour les coordonnées du cabinet et l'URL de l'API.
// Par défaut l'API est servie par les fonctions Vercel du même site (dossier /api).
export const API_URL = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');

// Informations légales de l'entreprise : à compléter. Seules les lignes renseignées
// apparaissent dans la page « Mentions légales ».
export const LEGAL = {
  companyName: 'KOF-EXPERTS',
  legalForm: '', // ex : SAS, SARL
  capital: '', // ex : 10 000 €
  siren: '', // ex : 123 456 789
  rcs: '', // ex : RCS Paris B 123 456 789
  vatNumber: '', // ex : FR12 123456789
  publicationDirector: '', // nom du directeur de la publication
  orderRegistration: '', // ex : Inscrit au tableau de l'Ordre des experts-comptables de la région Paris Île-de-France sous le n° ...
  professionalInsurance: '', // ex : nom de l'assureur et couverture géographique
};

export const CONTACT = {
  phone: '01 53 10 32 06',
  phoneHref: 'tel:+33153103206',
  email: 'contact@kof-experts.com',
  address: '22 Rue de Saussure, 75017 Paris',
  facebook: 'https://www.facebook.com/profile.php?id=100084737476572',
  linkedin: 'https://www.linkedin.com/company/kofexperts/',
};
