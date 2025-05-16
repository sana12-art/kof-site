import React, { useState } from 'react'; 
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        entreprise: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                // Optionnel: reset formulaire après succès
                setFormData({
                  nom: '',
                  email: '',
                  telephone: '',
                  entreprise: '',
                  message: ''
                });
            } else {
                alert('Erreur lors de l\'envoi.');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'envoi du formulaire.');
        }
    };

    return (
        <div className="jemelance-container">
            <h1>Rejoignez l'aventure avec KOF</h1>
            <p>Nous sommes impatients de construire votre succès ensemble. Laissez-nous vos informations et commencez votre parcours entrepreneurial dès aujourd'hui !</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="nom" 
                  placeholder="Votre nom" 
                  value={formData.nom}
                  required 
                  onChange={handleChange} 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Votre email" 
                  value={formData.email}
                  required 
                  onChange={handleChange} 
                />
            <input 
                type="tel" 
                name="telephone" 
                placeholder="Votre numéro de téléphone" 
                value={formData.telephone}
                required 
                onChange={handleChange} 
            />

                <input 
                  type="text" 
                  name="entreprise" 
                  placeholder="Le nom de votre entreprise" 
                  value={formData.entreprise}
                  required 
                  onChange={handleChange} 
                />
                <textarea 
                  name="message" 
                  placeholder="Votre message" 
                  value={formData.message}
                  required 
                  onChange={handleChange}
                ></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;