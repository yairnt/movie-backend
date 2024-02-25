// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

module.exports = pool;
