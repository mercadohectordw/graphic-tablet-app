import { db } from "../db";

export const getCurrentUserCart = (req:any, res:any) => {
  let query = `
    SELECT * FROM cart
    WHERE user_id = ${req.params.userId}
    AND bought_at IS NULL
    AND total_price IS NULL
  `;

  db.query(query)
    .then(([rows]) => {
      let result = JSON.parse(JSON.stringify(rows));

      if(result.length <= 0){
        res.status(404).send("El usuario no tiene un carrito abierto.")
      } else {
        getCartWithItems(result[0], res);
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getCartWithItems = (cart:any, res:any) => {
  let query = `
    SELECT ci.product_id, ci.quantity, p.name, p.description, p.first_image_url , p.price AS unit_price
    FROM cart_item ci INNER JOIN product p ON ci.product_id = p.id
    WHERE ci.cart_id = ${cart.id}
  `;

  db.query(query)
    .then(([rows]) => {
      cart.items = JSON.parse(JSON.stringify(rows));
      res.status(200).json(cart);
    })
    .catch((err) => {
      console.log(err);
    });
};