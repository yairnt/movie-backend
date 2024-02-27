// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'movies_db_postgres_user',
  host: 'dpg-cnf3m9779t8c73cebmeg-a', // Cambiado a 'db' que es el nombre del servicio en docker-compose.yml
  database: 'movies_db_postgres',
  password: 'LFib5cUEE9Cug2z7r3dE8RunHUMSUIGh',
  port: 5432,
});

module.exports = pool;
