import React, { useState } from 'react';
import './JeMeLance.css';

function JeMeLance() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/jemelance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Votre demande a bien été envoyée !");
        setErrorMessage('');
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          entreprise: '',
          message: '',
        });
        setTimeout(() => setSuccessMessage(''), 5000);
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
    <div className="jemelance-container">
      <h1>Rejoignez l'aventure avec KOF</h1>
      <p>Nous sommes impatients de construire votre succès ensemble. Laissez-nous vos informations et commencez votre parcours entrepreneurial dès aujourd'hui !</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Votre nom" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre email" required />
        <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Votre numéro de téléphone" required />
        <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder="Le nom de votre entreprise" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default JeMeLance;
