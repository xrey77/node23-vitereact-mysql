// src/db.ts
import { createPool, Pool } from 'mysql2';
import config from './config/db.config';

const pool: Pool = createPool({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB,
  port: config.PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL server successfully.');
  connection.release(); // Release the connection immediately after the check
});

export default pool;
