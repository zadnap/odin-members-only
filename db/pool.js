require('dotenv').config();

const { Pool } = require('pg');
const { PG_HOST, PG_USER, PG_DATABASE, PG_PASSWORD, PG_PORT } = process.env;

module.exports = new Pool({
  host: PG_HOST,
  user: PG_USER,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
});
