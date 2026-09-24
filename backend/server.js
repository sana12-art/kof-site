require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 5000;

// ALLOWED_ORIGINS : liste d'origines séparées par des virgules (ex : https://kof-site.vercel.app)
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000')
  .split(',')
  .map((o) => o.trim());
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());  // pour lire le JSON envoyé depuis React


// Connexion MySQL (identifiants dans backend/.env, jamais dans le code)
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'kofsite',
  port: Number(process.env.DB_PORT) || 3307
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
// Connexion : compare le mot de passe haché (table `users`, la même que /api/register).
// Aucun compte n'est créé ici et aucun mot de passe n'est stocké en clair.
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email et mot de passe requis.' });
  }

  db.query('SELECT password FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error('Erreur SQL:', err);
      return res.status(500).json({ success: false, message: 'Erreur serveur.' });
    }
    const valid = results.length > 0 && (await bcrypt.compare(password, results[0].password));
    if (!valid) {
      return res.status(401).json({ success: false, message: 'Email ou mot de passe incorrect' });
    }
    res.json({ success: true, message: 'Connexion réussie' });
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
app.get('/api/dashboard', (req, res) => {
  db.query('SELECT * FROM dashboard LIMIT 1', (err, result) => {
    if (err) {
      console.error('Erreur SQL :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    res.json(result[0]);
  });
});
app.post('/api/creation-entreprise', (req, res) => {
  const {
    nom,
    email,
    telephone,
    forme_juridique,
    nom_entreprise,
    secteur_activite,
    ville,
    message
  } = req.body;

  const sql = `INSERT INTO creation_entreprise_requests 
    (nom, email, telephone, forme_juridique, nom_entreprise, secteur_activite, ville, message)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [nom, email, telephone, forme_juridique, nom_entreprise, secteur_activite, ville, message], (err, result) => {
    if (err) {
      console.error('Erreur SQL:', err);
      return res.status(500).json({ message: 'Erreur lors de l’enregistrement.' });
    }
    res.json({ message: 'Votre demande de création d’entreprise a bien été enregistrée !' });
  });
});



app.listen(PORT, () => {
  console.log(`Serveur Node lancé sur http://localhost:${PORT}`);
});
