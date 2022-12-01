import { db } from "../db";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  let products = await db.query("select * from users");
  res.json(products[0]);
});

export default router;