import { db } from "../db";
import { loginValidation, registerValidation } from "../middleware/validation"

export const loginUser = (req:any, res:any) => {
  let logData = req.body;
  let validation = loginValidation(logData);

  if(validation.error){
    return res.status(400).send(validation.error);
  }

  let query = `
    SELECT * FROM users
    WHERE email = "${logData.email}"
    AND password = "${logData.password}"
  `;

  db.query(query)
    .then(([row]) => {
      let result = JSON.parse(JSON.stringify(row));

      if(result.length <= 0){
        res.status(400).send("Usuario no encontrado");
      } else {
        res.status(200).send("Usuario encontrado");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const registerUser = (req:any, res:any) => {
  let userData = req.body;
  let validation = registerValidation(userData);
  
  if(validation.error){
    return res.status(400).send(validation.error);
  }
  
  let query = `
    INSERT INTO users (first_name, last_name, email, password, created_at, image_url) VALUES
    ("${userData.first_name}", "${userData.last_name}", "${userData.email}", "${userData.password}", CURRENT_TIMESTAMP, "img")
  `;

  db.query(query)
    .then(([row]) => {
      let result = JSON.parse(JSON.stringify(row));
      
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

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

export const getUserById = (req:any, res:any) => {
  let query = `
    SELECT first_name, last_name, email, image_url, created_at
    FROM users
    WHERE id = ${[req.params.userId]}
  `;

  db.query(query)
    .then(([row]) => {
      let result = JSON.parse(JSON.stringify(row));

      if(result.length <= 0) {
        res.status(404).send("Usuario no encontrado");
      } else {
        res.status(200).json(result[0]); 
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};