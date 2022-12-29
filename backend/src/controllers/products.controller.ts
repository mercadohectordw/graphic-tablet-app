import { Request, Response } from "express";
import { db } from "../db";


export const getAllProducts = (req:Request, res:Response) => {
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

export const getProductsByCategory = (req:Request, res:Response) => {
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

export const getProductById = (req:Request, res:Response) => {
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
        getProductWithImages(result[0], res);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getProductWithImages = (product:any, res:Response) => {
  let query = `
    SELECT image_url AS url
    FROM product_image
    WHERE product_id = ${product.id}
  `;

  db.query(query)
    .then(([rows]) => {
      product.images = JSON.parse(JSON.stringify(rows));
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct = () => {

};

export const updateProduct = () => {

}

export const deleteProduct = () => {

}
