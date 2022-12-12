import { Router } from "express";
import { getAllUsers, getUserById, loginUser, registerUser } from "../controllers/users.controller";

const router = Router();

router.get("/", getAllUsers);

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/:userId", getUserById);

export default router;