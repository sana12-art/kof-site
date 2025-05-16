import React, { useState } from 'react';
import './Consultation.css';
import homme from '../assets/homme.svg'; 
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Consultation = () => {
  const [formData, setFormData] = useState({
    service: '',
    nom: '',
    email: '',
    phone: '',
    dateHeure: '',
    questions: '',
    acceptData: false,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptData) {
      setErrorMessage("Veuillez accepter la collecte des données.");
      setSuccessMessage('');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Consultation reçue et email envoyé avec succès !");
        setErrorMessage('');
        // Réinitialiser le formulaire
        setFormData({
          service: '',
          nom: '',
          email: '',
          phone: '',
          dateHeure: '',
          questions: '',
          acceptData: false,
        });
        setTimeout(() => setSuccessMessage(''), 5000); // message disparaît après 5 sec
      } else {
        setErrorMessage(result.message || "Erreur lors de l’envoi.");
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Erreur lors de l’envoi :', error);
      setErrorMessage("Erreur lors de l’envoi du formulaire.");
      setSuccessMessage('');
    }
  };

  return (
    <div className="consultation-container">
      <div className="consultation-columns">
        <div className="consultation-text">
          <h1>Vous avez un projet ? <br/>Contactez-nous pour <br/>planifier votre <br/> première <br/>consultation <br/> gratuite !</h1>
          <p>
            Nous sommes heureux de vous offrir une consultation <br/> initiale gratuite...
          </p>
        </div>

        <form className="consultation-form" onSubmit={handleSubmit}>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <label>Service souhaité :</label>
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">-- Choisissez un service --</option>
            <option>Comptabilité</option>
            <option>Conseil en gestion</option>
            <option>Conseil fiscal</option>
            <option>Création d’entreprise</option>         
            <option>Conseil Financier</option>
            <option>Conseil Juridique</option>
            <option>RH et Conseil Social</option>
            <option>Formations</option>
            <option>Accompagnement sur mesure</option>
          </select>

          <label>Nom :</label>
          <input type="text" name="nom" value={formData.nom} placeholder="Nom" onChange={handleChange} required />

          <label>Email :</label>
          <input type="email" name="email" value={formData.email} placeholder="Adresse e-mail" onChange={handleChange} required />

          <label>Téléphone :</label>
          <input type="tel" name="phone" value={formData.phone} placeholder="Numéro de téléphone" onChange={handleChange} required />

          <label>Date et heure préférées :</label>
          <input type="datetime-local" name="dateHeure" value={formData.dateHeure} onChange={handleChange} />

          <label>Questions spécifiques :</label>
          <textarea name="questions" value={formData.questions} rows="4" placeholder="Vos questions..." onChange={handleChange}></textarea>

          <div className="checkbox-container">
            <input className="box" type="checkbox" name="acceptData" checked={formData.acceptData} onChange={handleChange} />
            <label htmlFor="acceptData">J'accepte que mes données soient collectées.</label>
          </div>

          <button type="submit">Envoyer ma demande</button>
        </form>
      </div>

      <div className="consultation-image">
        <img src={homme} alt="Homme vecteur" />
      </div>

      <div className="consultation-contact">
        <h1>Pour toutes questions...</h1>
        <div data-number="01"><span>01 53 10 32 06</span></div>
        <div data-number="02"><span>60 Rue de La Jonquière, 75017 Paris</span></div>
        <div data-number="03"><span>contact@kof-experts.ma</span></div>
      </div>
    </div>
  );
};

export default Consultation;