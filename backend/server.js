const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 5000;  // Port différent de MySQL

app.use(cors());
app.use(express.json());  // pour lire le JSON envoyé depuis React

// Connexion MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kofsite_db',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la DB:', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

app.post('/api/devis', (req, res) => {
  const { name, phone, email, revenue, page_origin } = req.body;

  const sql = 'INSERT INTO devis_requests (name, phone, email, revenue, page_origin) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, phone, email, revenue, page_origin], (err, result) => {
    if (err) {
      console.error('Erreur SQL:', err);
      return res.status(500).json({ error: 'Erreur lors de l’enregistrement.' });
    }
    res.json({ message: 'Votre demande a bien été enregistrée !' });
  });
});
app.post('/api/consultation', (req, res) => {
  const { service, nom, email, phone, dateHeure, questions } = req.body;

  const sql = 'INSERT INTO consultation_requests (service, nom, email, phone, date_heure, questions) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [service, nom, email, phone, dateHeure, questions], (err, result) => {
    if (err) {
      console.error('Erreur SQL:', err);
      res.status(500).json({ message: 'Erreur lors de l’enregistrement.' });
    } else {
      res.json({ message: 'Votre demande de consultation a bien été enregistrée !' });
    }
  });
});
app.post('/api/jemelance', (req, res) => {
  const { nom, email, telephone, entreprise, message } = req.body;

  const sql = 'INSERT INTO jemelance_requests (nom, email, telephone, entreprise, message) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nom, email, telephone, entreprise, message], (err, result) => {
    if (err) {
      console.error('Erreur SQL:', err);
      res.status(500).json({ message: 'Erreur lors de l’enregistrement.' });
    } else {
      res.json({ message: 'Votre demande a bien été enregistrée !' });
    }
  });
});
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Vérifie si l'utilisateur existe déjà
  const checkSql = 'SELECT * FROM utilisateurs WHERE email = ?';
  db.query(checkSql, [email], (err, results) => {
    if (err) {
      console.error('Erreur SQL:', err);
      return res.status(500).json({ success: false, message: 'Erreur serveur.' });
    }

    if (results.length > 0) {
      // L'utilisateur existe, vérifier le mot de passe
      const user = results[0];
      if (user.password === password) {
        res.json({ success: true, message: 'Connexion réussie' });
      } else {
        res.status(401).json({ success: false, message: 'Mot de passe incorrect' });
      }
    } else {
      // L'utilisateur n'existe pas : on l'ajoute directement
      const insertSql = 'INSERT INTO utilisateurs (email, password) VALUES (?, ?)';
      db.query(insertSql, [email, password], (err, result) => {
        if (err) {
          console.error('Erreur lors de l\'insertion:', err);
          return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        res.json({ success: true, message: 'Utilisateur créé et connecté' });
      });
    }
  });
});
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email et mot de passe requis.' });
  }

  try {
    // Hacher le mot de passe avec un "salt" (complexité)
    const hashedPassword = await bcrypt.hash(password, 10); // 10 = rounds de salt

    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(sql, [email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ message: 'Cet email est déjà utilisé.' });
        }
        console.error('Erreur SQL :', err);
        return res.status(500).json({ message: 'Erreur lors de l’inscription.' });
      }

      res.status(201).json({ message: 'Inscription réussie.' });
    });
  } catch (error) {
    console.error('Erreur serveur :', error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
});




app.listen(PORT, () => {
  console.log(`Serveur Node lancé sur http://localhost:${PORT}`);
});
