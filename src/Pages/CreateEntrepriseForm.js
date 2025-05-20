import React, { useState } from 'react';
import './CreateEntrepriseForm.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const CreateEntrepriseForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    domaine: '',
    nomPrenom: '',
    email: '',
    telephone: '',
    formeJuridique: '',
    dateCreation: '',
    nomSociete: '',
    capitalSocial: '',
    dateCreationSouhaitee: ''

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/creation-entreprise', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setSuccessMessage("Votre demande a bien été enregistrée !");
      setErrorMessage('');
      setFormData({
        domaine: '',
        nomPrenom: '',
        email: '',
        telephone: '',
        formeJuridique: '',
        dateCreation: '',
        nomSociete: '',
        capitalSocial: '',
        dateCreationSouhaitee: ''
      });
      setTimeout(() => setSuccessMessage(''), 5000);
    } else {
      setErrorMessage(result.message || "Erreur lors de l’enregistrement.");
      setSuccessMessage('');
    }
  } catch (error) {
    console.error('Erreur lors de l’envoi :', error);
    setErrorMessage("Erreur lors de l’envoi du formulaire.");
    setSuccessMessage('');
  }
};


  return (
    
    <div className="create-form-container">
    {successMessage && <div className="success-message">{successMessage}</div>}
    {errorMessage && <div className="error-message">{errorMessage}</div>}
    {step === 1 && (
      
  <div>
    

    <h2>Quel sera votre domaine d’activité ?</h2>
    <select name="domaine" value={formData.domaine} onChange={handleChange}>
      <option value="">-- Choisissez un domaine --</option>
      <option value="Agriculture">Agriculture</option>
      <option value="Artisan & Commerçant">Artisan & Commerçant</option>
      <option value="BTP">BTP</option>
      <option value="E-commerce">E-commerce</option>
      <option value="Freelance & Indépendants">Freelance & Indépendants</option>
      <option value="Hôtellerie & Restauration">Hôtellerie & Restauration</option>
      <option value="Livraison de repas à vélo">Livraison de repas à vélo</option>
      <option value="Profession Libérale">Profession Libérale</option>
      <option value="Services aux entreprises">Services aux entreprises</option>
      <option value="Services à la personne">Services à la personne</option>
      <option value="SCI - LMNP">SCI - LMNP</option>
    </select>
    <br /><br />
    <button onClick={nextStep}>Suivant</button>
  </div>
)}

      {step === 2 && (
        <div>
          <h2>Quelle est l’identité du créateur d'entreprise ?</h2>
          <input type="text" name="nomPrenom" value={formData.nomPrenom} onChange={handleChange} placeholder="Nom Prénom" />
          <button onClick={prevStep}>Retour</button>
          <button onClick={nextStep}>Suivant</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Quelle est votre adresse mail ?</h2>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <PhoneInput
            country={'fr'} // code ISO par défaut (fr = France, ma = Maroc)
            value={formData.telephone}
            onChange={(value) => setFormData({ ...formData, telephone: value })}
          />
          <button onClick={prevStep}>Retour</button>
          <button onClick={nextStep}>Suivant</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>Quand souhaitez-vous créer votre entreprise ?*</h2>
          <select
            name="dateCreationSouhaitee"
            value={formData.dateCreationSouhaitee}
            onChange={handleChange}
            required
          >
            <option value="">-- Choisissez une option --</option>
            <option value="Des que possible">Dès que possible</option>
            <option value="Dans un mois">Dans un mois</option>
            <option value="Dans trois mois">Dans trois mois</option>
            <option value="Plus tard">Plus tard</option>
            <option value="Je ne sais pas encore">Je ne sais pas encore</option>
          </select>
          <br /><br />
          <button onClick={prevStep}>Retour</button>
          <button onClick={nextStep}>Suivant</button>
        </div>
      )}


      {step === 5 && (
        <div>
          <h2>Quelle forme juridique souhaitez-vous ?*</h2>
          <select name="formeJuridique" value={formData.formeJuridique} onChange={handleChange} required>
            <option value="">-- Sélectionnez une forme juridique --</option>
            <option value="SASU/SAS">SASU/SAS</option>
            <option value="SARL/EURL">SARL/EURL</option>
            <option value="SCI/LMNP">SCI/LMNP</option>
            <option value="Micro entreprise/Auto-Entrepreneur">Micro entreprise / Auto-Entrepreneur</option>
            <option value="EI/EIRL">EI / EIRL</option>
            <option value="Conseils">Je ne sais pas. J'ai besoin de conseils</option>
            <option value="Autre">Autre</option>
          </select>
          <br /><br />
          <button onClick={prevStep}>Retour</button>
          <button onClick={nextStep}>Suivant</button>
        </div>
      )}


      {step === 6 && (
        <div>
          <h2>Quel nom choisissez-vous pour votre société ?</h2>
          <input type="text" name="nomSociete" value={formData.nomSociete} onChange={handleChange} />
          <button onClick={prevStep}>Retour</button>
          <button onClick={nextStep}>Suivant</button>
        </div>
      )}

      {step === 7 && (
        <div>
          <h2>Capital social ?</h2>
          <input type="text" name="capitalSocial" value={formData.capitalSocial} onChange={handleChange} />
          <button onClick={prevStep}>Retour</button>
          <button onClick={handleSubmit}>Envoyer</button>
        </div>
      )}
    </div>
  );
};

export default CreateEntrepriseForm;
