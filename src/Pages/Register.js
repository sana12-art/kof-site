import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../assets/logo.png';
import { FaKey, FaEye, FaEyeSlash } from 'react-icons/fa';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);           // ← État pour afficher/masquer
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');                // 'success' ou 'error'
  const navigate = useNavigate();

  const generatePassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let newPwd = "";
    for (let i = 0; i < length; i++) {
      newPwd += charset[Math.floor(Math.random() * charset.length)];
    }
    setPassword(newPwd);
    setConfirmPassword(newPwd);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');

    if (password !== confirmPassword) {
      setMessage('Les mots de passe ne correspondent pas');
      setMessageType('error');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('prefillEmail', email);
        localStorage.setItem('prefillPassword', password);
        setMessage('Inscription réussie, redirection en cours…');
        setMessageType('success');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(data.message || 'Erreur lors de l’inscription');
        setMessageType('error');
      }
      
      
      } catch (err) {
      console.error('Erreur serveur :', err);
      setMessage('Erreur serveur lors de l’inscription');
      setMessageType('error');
    }
  };

  const handleLoginRedirect = () => navigate('/login');

  return (
    <div className="register-container">
      <img src={logo} alt="KOF Logo" className="logo" />
      <h2>Créer un compte</h2>

      {message && (
        <div className={`message ${messageType}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <FaKey
            className="generate-icon"
            onClick={generatePassword}
            title="Générer un mot de passe"
          />
          {showPassword
            ? <FaEyeSlash
                className="toggle-icon"
                onClick={togglePasswordVisibility}
                title="Masquer le mot de passe"
              />
            : <FaEye
                className="toggle-icon"
                onClick={togglePasswordVisibility}
                title="Afficher le mot de passe"
              />}
        </div>

        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          {/* On peut réutiliser l'œil ici : */}
          {showPassword
            ? <FaEyeSlash
                className="toggle-icon"
                onClick={togglePasswordVisibility}
                title="Masquer le mot de passe"
              />
            : <FaEye
                className="toggle-icon"
                onClick={togglePasswordVisibility}
                title="Afficher le mot de passe"
              />}
        </div>

        <button type="submit">S'inscrire</button>
      </form>

      <p className="register-link" onClick={handleLoginRedirect}>
        Déjà un compte ? Se connecter
      </p>
    </div>
  );
}

export default Register;
