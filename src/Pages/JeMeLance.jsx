import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import heroImg from '../assets/photos/hero-contact.jpg';
import { postJson } from '../services/api';
import { CONTACT } from '../config';
import './JeMeLance.css';

const initialState = { nom: '', email: '', telephone: '', entreprise: '', message: '' };

function JeMeLance() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const result = await postJson('/api/jemelance', formData);
    if (result.ok) {
      setStatus({ type: 'success', text: 'Votre demande a bien été envoyée ! Nous vous recontactons très vite.' });
      setFormData(initialState);
    } else {
      setStatus({ type: 'error', text: result.message });
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <title>Nous contacter | KOF-EXPERTS</title>
      <PageHero
        image={heroImg}
        label="Contact"
        title="Rejoignez l'aventure avec KOF"
        subtitle="Nous sommes impatients de construire votre succès ensemble. Laissez-nous vos informations et commencez votre parcours dès aujourd'hui."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info card">
            <h2>Nos coordonnées</h2>
            <p><i className="fas fa-phone" aria-hidden="true"></i> <a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
            <p><i className="fas fa-envelope" aria-hidden="true"></i> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
            <p><i className="fas fa-location-dot" aria-hidden="true"></i> {CONTACT.address}</p>
          </div>

          <form className="form-stack contact-form card" onSubmit={handleSubmit}>
            <h2>Écrivez-nous</h2>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Votre nom" autoComplete="name" aria-label="Votre nom" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre email" autoComplete="email" aria-label="Votre email" required />
            <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Votre numéro de téléphone" autoComplete="tel" aria-label="Votre téléphone" required />
            <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder="Le nom de votre entreprise" autoComplete="organization" aria-label="Votre entreprise" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Votre message" aria-label="Votre message" required></textarea>

            {status && <p className={`form-message ${status.type}`} role="status">{status.text}</p>}

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Envoi en cours…' : 'Envoyer'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default JeMeLance;
