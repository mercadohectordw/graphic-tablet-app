import express from "express";
import cors from "cors";
import { db } from "./db";

const app = express();
const port = 3000;

app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}))

app.get("/api/products/", async (req, res) => {
  res.json(await db.query("select * from users"));
});

app.listen(port, () => {
  console.log("Api loaded on http://localhost:" + port);
});