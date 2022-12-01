import { createPool } from "mysql2/promise";

export const db = createPool({
  host: "localhost",
  user: "root",
  password: "1564",
  port: 3306,
  database: "graphic_tablet_app"
});