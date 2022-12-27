import { db } from "../db";
import { loginValidation, registerValidation } from "../middleware/validation";
import md5 from 'md5';
import jwt from 'jsonwebtoken';
 
export const loginUser = (req:any, res:any) => {
  let logData = req.body;
  let validation = loginValidation(logData);

  if(validation.error){
    return res.status(400).send(validation.error);
  }

  let hadhedPassword = md5(logData.password);

  let query = `
    SELECT * FROM users
    WHERE email = "${logData.email}"
    AND password = "${hadhedPassword}"
  `;

  db.query(query)
    .then(([row]) => {
      let result = JSON.parse(JSON.stringify(row));

      if(result.length <= 0){
        res.status(400).send("Usuario no encontrado");
      } else {
        let token = jwt.sign({data: result[0]}, "secret");
        res.status(200).send("Usuario logueado", result[0], token);
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
    SELECT first_name, last_name, email, image_url, created_at 
    FROM users 
    WHERE email = "${userData.email}";
  `;

  db.query(query)
    .then(([row]) => {
      let result = JSON.parse(JSON.stringify(row));

      if(result.length == 0){//email no usado => registro de cuenta

        let hadhedPassword = md5(userData.password);

        let query = `
          INSERT INTO users (first_name, last_name, email, password, created_at, image_url) VALUES
          ("${userData.first_name}", "${userData.last_name}", "${userData.email}", "${hadhedPassword}", CURRENT_TIMESTAMP, "img")
        `;
      
        db.query(query)
          .then(([row]) => {
            let result = JSON.parse(JSON.stringify(row));
            
            res.status(200).json(result);
          })
          .catch((err) => {
            console.log("Error en la creación de un nuevo usuario: \n" + err);
            res.status(400).send("Ocurrió un problema, intente más tarde.");
          });

      } else { //email usado => respuesta de email en uso
        res.status(400).send("El email ya está en uso.");
      }
    })
    .catch((err) => {
      console.log("Error en la creación de un nuevo usuario: \n" + err);
      res.status(400).send("Ocurrió un problema, intente más tarde.");
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