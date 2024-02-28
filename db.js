// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'movies_db_postgres_user', // Change to 'user' to run local
  host: 'dpg-cnf3m9779t8c73cebmeg-a', // Change to 'db' to run local
  database: 'movies_db_postgres', // Change to 'database' to run local
  password: 'LFib5cUEE9Cug2z7r3dE8RunHUMSUIGh', //Change to 'password' to run local
  port: 5432,
});

module.exports = pool;
