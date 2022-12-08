import { createPool } from "mysql2/promise";
require('dotenv').config();

export const db = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.PORT),
  database: process.env.DB_NAME
});