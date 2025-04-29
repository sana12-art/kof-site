import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@test.com" && password === "password") {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/'); // Redirige vers la page d'accueil
    } else {
      alert('Identifiants incorrects');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Redirige vers la page d'inscription
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
        <input 
          type="password" 
          placeholder="Mot de passe" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      <p className="register-link" onClick={handleRegister}>Pas encore de compte ? S'inscrire ici</p>
    </div>
  );
}

export default Login;
