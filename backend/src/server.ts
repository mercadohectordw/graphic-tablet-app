import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}))

app.get("/api/products/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("Api loaded on http://localhost:" + port);
});