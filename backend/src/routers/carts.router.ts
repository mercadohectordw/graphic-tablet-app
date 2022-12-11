import { Router } from "express";
import { getCurrentUserCart } from "../controllers/carts.controller";

const router = Router();

router.get("/:userId", getCurrentUserCart);

export default router;