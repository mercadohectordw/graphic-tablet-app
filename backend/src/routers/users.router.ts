import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/users.controller";

const router = Router();

router.get("/", getAllUsers);

router.post("/login", );

router.post("/register", );

router.get("/:userId", getUserById);

export default router;