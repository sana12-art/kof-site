import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { postJson } from '../services/api';
import './DevisForm.css';

const initialState = { name: '', phone: '', email: '', revenue: '' };

// Formulaire de devis unique, utilisé sur l'accueil et sur la page Services.
const DevisForm = ({ origin = 'home', title = 'Obtenir un devis gratuit et sans engagement' }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const setField = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.phone || values.phone.replace(/\D/g, '').length < 8) {
      setMessage({ type: 'error', text: 'Merci de saisir un numéro de téléphone valide.' });
      return;
    }
    setLoading(true);
    setMessage(null);
    const result = await postJson('/api/devis', { ...values, page_origin: origin });
    setMessage({ type: result.ok ? 'success' : 'error', text: result.message });
    if (result.ok) setValues(initialState);
    setLoading(false);
  };

  return (
    <div className="devis-card card">
      <h3 className="devis-title">{title}</h3>

      <form className="form-stack" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom et prénom"
          autoComplete="name"
          aria-label="Nom et prénom"
          value={values.name}
          onChange={setField('name')}
          required
        />

        <PhoneInput
          country="fr"
          enableSearch
          preferredCountries={['fr', 'ma', 'us', 'gb']}
          inputProps={{ name: 'phone', required: true, 'aria-label': 'Téléphone' }}
          value={values.phone}
          onChange={(phone) => setValues((v) => ({ ...v, phone }))}
          placeholder="Numéro de téléphone"
        />

        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          autoComplete="email"
          aria-label="Adresse email"
          value={values.email}
          onChange={setField('email')}
          required
        />

        <input
          type="text"
          name="revenue"
          inputMode="numeric"
          placeholder="Chiffre d'affaires HT (€)"
          aria-label="Chiffre d'affaires annuel HT en euros"
          value={values.revenue}
          onChange={setField('revenue')}
          required
        />

        {message && (
          <p className={`form-message ${message.type}`} role="status">
            {message.text}
          </p>
        )}

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Envoi en cours…' : 'Demandez votre devis'}
        </button>

        <p className="form-legal">
          En cliquant sur « Demandez votre devis », vous acceptez d'être contacté par KOF-EXPERTS.{' '}
          <Link to="/confidentialite">Politique de confidentialité</Link>
        </p>
      </form>
    </div>
  );
};

export default DevisForm;
