import express from "express";
import cors from "cors";
import productsRouter from "./routers/products.router";
import usersRouter from "./routers/users.router";
import cartsRouter from "./routers/carts.router"

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}))

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/carts", cartsRouter);

app.listen(port, () => {
  console.log("Api loaded on http://localhost:" + port);
});