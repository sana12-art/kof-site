import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import heroImg from '../assets/photos/hero-creation.jpg';
import { postJson } from '../services/api';
import './CreateEntrepriseForm.css';

const DOMAINES = [
  'Agriculture',
  'Artisan & Commerçant',
  'BTP',
  'E-commerce',
  'Freelance & Indépendants',
  'Hôtellerie & Restauration',
  'Livraison de repas à vélo',
  'Profession Libérale',
  'Services aux entreprises',
  'Services à la personne',
  'SCI - LMNP',
];

const DELAIS = ['Dès que possible', 'Dans un mois', 'Dans trois mois', 'Plus tard', 'Je ne sais pas encore'];

const FORMES = [
  'SASU/SAS',
  'SARL/EURL',
  'SCI/LMNP',
  'Micro entreprise / Auto-Entrepreneur',
  'EI / EIRL',
  "Je ne sais pas. J'ai besoin de conseils",
  'Autre',
];

const initialState = {
  domaine: '',
  nomPrenom: '',
  email: '',
  telephone: '',
  dateCreationSouhaitee: '',
  formeJuridique: '',
  nomSociete: '',
  capitalSocial: '',
};

const TOTAL_STEPS = 7;

const CreateEntrepriseForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Champs obligatoires pour passer à l'étape suivante
  const canContinue = () => {
    switch (step) {
      case 1: return !!formData.domaine;
      case 2: return formData.nomPrenom.trim().length > 1;
      case 3: return /\S+@\S+\.\S+/.test(formData.email) && formData.telephone.replace(/\D/g, '').length >= 8;
      case 4: return !!formData.dateCreationSouhaitee;
      case 5: return !!formData.formeJuridique;
      case 6: return formData.nomSociete.trim().length > 0;
      default: return true;
    }
  };

  const next = (e) => {
    e.preventDefault();
    if (!canContinue()) {
      setError('Merci de compléter ce champ pour continuer.');
      return;
    }
    setError('');
    setStep((s) => s + 1);
  };

  const prev = () => {
    setError('');
    setStep((s) => s - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Le backend attend ces noms de colonnes.
    const payload = {
      nom: formData.nomPrenom,
      email: formData.email,
      telephone: formData.telephone,
      forme_juridique: formData.formeJuridique,
      nom_entreprise: formData.nomSociete,
      secteur_activite: formData.domaine,
      ville: '',
      message: `Capital social : ${formData.capitalSocial || 'non précisé'} | Création souhaitée : ${formData.dateCreationSouhaitee}`,
    };
    const result = await postJson('/api/creation-entreprise', payload);
    if (result.ok) {
      setSent(true);
      setFormData(initialState);
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Quel sera votre domaine d'activité ?</h2>
            <select name="domaine" value={formData.domaine} onChange={handleChange} aria-label="Domaine d'activité" required>
              <option value="">-- Choisissez un domaine --</option>
              {DOMAINES.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </>
        );
      case 2:
        return (
          <>
            <h2>Quelle est l'identité du créateur d'entreprise ?</h2>
            <input type="text" name="nomPrenom" value={formData.nomPrenom} onChange={handleChange} placeholder="Nom Prénom" autoComplete="name" aria-label="Nom et prénom" required />
          </>
        );
      case 3:
        return (
          <>
            <h2>Comment pouvons-nous vous joindre ?</h2>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Adresse email" autoComplete="email" aria-label="Adresse email" required />
            <PhoneInput
              country="fr"
              preferredCountries={['fr', 'ma']}
              value={formData.telephone}
              onChange={(telephone) => setFormData((f) => ({ ...f, telephone }))}
              inputProps={{ 'aria-label': 'Téléphone' }}
            />
          </>
        );
      case 4:
        return (
          <>
            <h2>Quand souhaitez-vous créer votre entreprise ?</h2>
            <select name="dateCreationSouhaitee" value={formData.dateCreationSouhaitee} onChange={handleChange} aria-label="Délai de création" required>
              <option value="">-- Choisissez une option --</option>
              {DELAIS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </>
        );
      case 5:
        return (
          <>
            <h2>Quelle forme juridique souhaitez-vous ?</h2>
            <select name="formeJuridique" value={formData.formeJuridique} onChange={handleChange} aria-label="Forme juridique" required>
              <option value="">-- Sélectionnez une forme juridique --</option>
              {FORMES.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
          </>
        );
      case 6:
        return (
          <>
            <h2>Quel nom choisissez-vous pour votre société ?</h2>
            <input type="text" name="nomSociete" value={formData.nomSociete} onChange={handleChange} placeholder="Nom de la société" aria-label="Nom de la société" required />
          </>
        );
      default:
        return (
          <>
            <h2>Quel sera le capital social ?</h2>
            <input type="text" name="capitalSocial" inputMode="numeric" value={formData.capitalSocial} onChange={handleChange} placeholder="Ex : 1 000 €" aria-label="Capital social" />
            <p className="form-legal">Facultatif : vous pourrez le préciser avec votre conseiller.</p>
          </>
        );
    }
  };

  return (
    <div className="page">
      <title>Création d'entreprise | KOF-EXPERTS</title>
      <PageHero
        image={heroImg}
        label="Création d'entreprise"
        title="Créez votre entreprise en toute sérénité"
        subtitle="Répondez à quelques questions, un expert KOF vous recontacte pour construire votre projet."
      />

      <section className="section">
        <div className="container">
          <div className="create-form-container card">
            {sent ? (
              <div className="create-done">
                <span className="create-done-icon"><i className="fas fa-check" aria-hidden="true"></i></span>
                <h2>Merci, votre demande est envoyée !</h2>
                <p>Un expert KOF-EXPERTS vous recontacte très prochainement pour la suite de votre projet.</p>
                <div className="create-done-actions">
                  <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
                  <Link to="/service-creation-entreprise" className="btn btn-outline">Notre accompagnement</Link>
                </div>
              </div>
            ) : (
              <form className="form-stack" onSubmit={step === TOTAL_STEPS ? handleSubmit : next} noValidate>
                <div className="create-progress" aria-hidden="true">
                  <div className="create-progress-bar" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
                </div>
                <p className="create-step-label">Étape {step} sur {TOTAL_STEPS}</p>

                {renderStep()}

                {error && <p className="form-message error" role="alert">{error}</p>}

                <div className="create-actions">
                  {step > 1 && (
                    <button type="button" className="btn btn-outline" onClick={prev}>Retour</button>
                  )}
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {step === TOTAL_STEPS ? (loading ? 'Envoi en cours…' : 'Envoyer ma demande') : 'Suivant'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateEntrepriseForm;
