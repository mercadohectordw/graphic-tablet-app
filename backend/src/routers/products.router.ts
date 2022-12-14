import { Router } from "express";
import { getAllProducts, getProductById, getProductsByCategory, createProduct, updateProduct, deleteProduct} from "../controllers/products.controller";
import { verifyToken } from "../middleware/auth";

const router = Router();

router.get("/", getAllProducts);

router.get("/category/:categoryId", getProductsByCategory);

router.get("/:productId", getProductById);


export default router;