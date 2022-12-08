import { db } from "../db";


export const getAllProducts = (req:any, res:any) => {
  let query = `
    SELECT * FROM product
  `;

  db.query(query)
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const getProductsByCategory = (req:any, res:any) => {
  let query = `
    SELECT * FROM product
    WHERE category_id = ${[req.params.categoryId]}
  `;
  
  db.query(query)
    .then(([rows]) => {
      let result = JSON.parse(JSON.stringify(rows));

      if(result.length <= 0) {
        res.status(404).send("La categoria no tiene productos");
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const getProductsById = (req:any, res:any) => {
  let query = `
    SELECT * FROM product
    WHERE id = ${[req.params.productId]}
  `;

  db.query(query)
    .then(([row]) => {
      let result = JSON.parse(JSON.stringify(row));

      if(result.length <= 0) {
        res.status(404).send("Producto no encontrado");
      } else {
        res.status(200).json(result[0]);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const createProduct = () => {

};

export const updateProduct = () => {

}

export const deleteProduct = () => {

}
