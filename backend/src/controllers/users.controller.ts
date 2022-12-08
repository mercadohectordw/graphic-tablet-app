import { db } from "../db";

export const getAllUsers = (req:any, res:any) => {
  let query = `
    SELECT first_name, last_name, email, image_url, created_at
    FROM users
  `;

  db.query(query)
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};