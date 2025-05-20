import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png';
import { FaKey, FaEye, FaEyeSlash } from 'react-icons/fa'; // ← Icônes

function Login() {
  const savedEmail    = localStorage.getItem('prefillEmail') || '';
  const savedPassword = localStorage.getItem('prefillPassword') || '';
  const [email, setEmail]       = useState(savedEmail);
  const [password, setPassword] = useState(savedPassword);

  const [showPassword, setShowPassword] = useState(false); // ← Nouvelle ligne
  const navigate = useNavigate();

  const generatePassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }
    setPassword(newPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }) // ← données envoyées
    });

    const data = await response.json();

    if (response.ok && data.success) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      alert(data.message || 'Identifiants incorrects');
    }
  } catch (error) {
    console.error('Erreur de connexion:', error);
    alert('Erreur serveur lors de la connexion');
  }
};






  return (
    <div className="login-container">
      <img src={logo} alt="KOF Logo" className="logo" />
      <h2>Connexion</h2>

      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-input-wrapper">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Mot de passe" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaKey className="generate-icon" onClick={generatePassword} title="Générer un mot de passe" />
          {showPassword ? (
            <FaEyeSlash className="toggle-icon" onClick={togglePasswordVisibility} title="Masquer le mot de passe" />
          ) : (
            <FaEye className="toggle-icon" onClick={togglePasswordVisibility} title="Afficher le mot de passe" />
          )}
        </div>

        <button type="submit">Se connecter</button>
        <p>Pas encore inscrit ? <a href="/register">Créer un compte</a></p>
      </form>

     
    </div>
  );
}

export default Login;
