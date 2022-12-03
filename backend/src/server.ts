import express from "express";
import cors from "cors";
import productsRouter from "./routers/products.router";

const app = express();
const port = 3000;

app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}))

app.use("/api/products", productsRouter);

app.listen(port, () => {
  console.log("Api loaded on http://localhost:" + port);
});