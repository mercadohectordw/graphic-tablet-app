import { Router } from "express";
import { getAllUsers } from "../controllers/users.controller";

const router = Router();

router.get("/", getAllUsers);

router.post("/login", );

router.post("/register", );


export default router;