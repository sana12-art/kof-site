import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { postJson } from '../services/api';
import './DevisForm.css';

const initialState = { name: '', phone: '', email: '', revenue: '' };

// Formulaire de devis unique, utilisé sur l'accueil et sur la page Services.
const DevisForm = ({ origin = 'home', title = 'Demander un devis' }) => {
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
      <span className="eyebrow">Gratuit &amp; sans engagement</span>
      <h3 className="devis-title">{title}</h3>

      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="devis-name">Nom et prénom</label>
        <input
          id="devis-name"
          type="text"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={setField('name')}
          required
        />

        <label htmlFor="devis-phone">Téléphone</label>
        <PhoneInput
          inputProps={{ id: 'devis-phone', name: 'phone', required: true }}
          country="fr"
          enableSearch
          preferredCountries={['fr', 'ma', 'us', 'gb']}
          value={values.phone}
          onChange={(phone) => setValues((v) => ({ ...v, phone }))}
        />

        <label htmlFor="devis-email">Adresse email</label>
        <input
          id="devis-email"
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={setField('email')}
          required
        />

        <label htmlFor="devis-revenue">Chiffre d'affaires annuel HT (€)</label>
        <input
          id="devis-revenue"
          type="text"
          name="revenue"
          inputMode="numeric"
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
