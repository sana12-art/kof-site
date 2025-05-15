import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../assets/logo.png'; 
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Logique d'inscription ici (enregistrer dans la base de données, par exemple)
      alert('Inscription réussie');
      navigate('/login'); // Redirige l'utilisateur vers la page de connexion
    } else {
      alert('Les mots de passe ne correspondent pas');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirige vers la page de connexion si l'utilisateur a déjà un compte
  };

  return (
    <div className="register-container">
      <img src={logo} alt="KOF Logo" className="logo" />
      <h2>Créer un compte</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Confirmer le mot de passe" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
      <p className="register-link" onClick={handleLoginRedirect}>Déjà un compte ? Se connecter</p>
    </div>
  );
}

export default Register;
