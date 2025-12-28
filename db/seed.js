require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const { PG_HOST, PG_USER, PG_DATABASE, PG_PASSWORD, PG_PORT } = process.env;

async function main() {
  console.log('Seeding database...');

  const schemaPath = path.join(__dirname, 'schema.sql');
  const SQL = fs.readFileSync(schemaPath, 'utf8');
  const client = new Client({
    host: PG_HOST,
    user: PG_USER,
    database: PG_DATABASE,
    password: PG_PASSWORD,
    port: PG_PORT,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log('Done!');
}

main().catch(console.error);
