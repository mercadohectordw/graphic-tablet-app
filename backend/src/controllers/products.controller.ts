import { db } from "../db";


export const getAllProducts = async (req:any, res:any) => {
  db.query("SELECT * FROM product")
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

export const getProductsById = () => {

};

export const getProductsByCategory = () => {

};

export const createProduct = () => {

};

export const updateProduct = () => {

}

export const deleteProduct = () => {

}
