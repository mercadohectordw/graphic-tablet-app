import express from "express";
import cors from "cors";
import productsRouter from "./routers/products.router";
import usersRouter from "./routers/users.router";

const app = express();
const port = 3000;

app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}))

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter)

app.listen(port, () => {
  console.log("Api loaded on http://localhost:" + port);
});