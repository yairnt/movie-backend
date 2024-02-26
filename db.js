// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  host: 'db', // Cambiado a 'db' que es el nombre del servicio en docker-compose.yml
  database: 'database',
  password: 'password',
  port: 5432,
});

module.exports = pool;
