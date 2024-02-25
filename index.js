const express = require('express');
const multer = require('multer');
const path = require('path');
const pool = require('./db');
const app = express();


const storage = multer.diskStorage({
  destination: '/usr/src/app/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

app.use('/images', express.static(path.join(__dirname, 'images')));

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imageUrl = `/images/${req.file.filename}`;
    const { titulo } = req.body;
    
    const result = await pool.query('INSERT INTO peliculas (titulo, imagen) VALUES ($1, $2) RETURNING *', [titulo, imageUrl]);
    console.log('result', result)
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al cargar la imagen' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(__dirname + '/images');
});
