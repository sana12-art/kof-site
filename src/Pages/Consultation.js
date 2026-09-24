import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import heroImg from '../assets/photos/hero-consultation.jpg';
import { postJson } from '../services/api';
import { CONTACT } from '../config';
import homme from '../assets/homme.svg';
import './Consultation.css';

const SERVICES = [
  'Comptabilité',
  'Conseil en gestion',
  'Conseil fiscal',
  "Création d'entreprise",
  'Conseil financier',
  'Conseil juridique',
  'RH et conseil social',
  'Formations',
  'Accompagnement sur mesure',
];

const initialState = { service: '', nom: '', email: '', phone: '', dateHeure: '', questions: '' };

const Consultation = () => {
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
    const result = await postJson('/api/consultation', formData);
    if (result.ok) {
      setStatus({ type: 'success', text: 'Votre demande de consultation a bien été reçue. Nous vous recontactons rapidement.' });
      setFormData(initialState);
    } else {
      setStatus({ type: 'error', text: result.message });
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <title>Consultation gratuite | KOF-EXPERTS</title>
      <PageHero
        image={heroImg}
        label="Consultation gratuite"
        title="Planifiez votre première consultation gratuite"
        subtitle="Vous avez un projet ? Parlons-en : nous vous offrons une première consultation gratuite et sans engagement."
      />

      <section className="section">
        <div className="container consultation-grid">
          <form className="form-stack consultation-form card" onSubmit={handleSubmit}>
            <label htmlFor="c-service">Service souhaité</label>
            <select id="c-service" name="service" value={formData.service} onChange={handleChange} required>
              <option value="">-- Choisissez un service --</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <label htmlFor="c-nom">Nom</label>
            <input id="c-nom" type="text" name="nom" value={formData.nom} placeholder="Votre nom" autoComplete="name" onChange={handleChange} required />

            <label htmlFor="c-email">Email</label>
            <input id="c-email" type="email" name="email" value={formData.email} placeholder="Adresse e-mail" autoComplete="email" onChange={handleChange} required />

            <label htmlFor="c-phone">Téléphone</label>
            <input id="c-phone" type="tel" name="phone" value={formData.phone} placeholder="Numéro de téléphone" autoComplete="tel" onChange={handleChange} required />

            <label htmlFor="c-date">Date et heure préférées</label>
            <input id="c-date" type="datetime-local" name="dateHeure" value={formData.dateHeure} onChange={handleChange} />

            <label htmlFor="c-questions">Questions spécifiques</label>
            <textarea id="c-questions" name="questions" value={formData.questions} rows="4" placeholder="Vos questions…" onChange={handleChange}></textarea>

            {status && <p className={`form-message ${status.type}`} role="status">{status.text}</p>}

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
            </button>
          </form>

          <aside className="consultation-side">
            <img src={homme} alt="" className="consultation-image" loading="lazy" />
            <div className="consultation-contact card">
              <h2>Pour toute question</h2>
              <p><i className="fas fa-phone" aria-hidden="true"></i> <a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
              <p><i className="fas fa-location-dot" aria-hidden="true"></i> {CONTACT.address}</p>
              <p><i className="fas fa-envelope" aria-hidden="true"></i> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
