// index.js
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Ruta para cargar películas
app.post('/cargar-pelicula', async (req, res) => {
  const { titulo, imagen } = req.body;
    console.log('cargando peli', titulo, imagen)
  try {
    const result = await pool.query('INSERT INTO peliculas (titulo, imagen) VALUES ($1, $2) RETURNING *', [titulo, imagen]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al insertar película:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor API escuchando en http://localhost:${port}`);
});
