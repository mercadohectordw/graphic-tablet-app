import { Router } from "express";
import { getAllProducts, getProductsById, getProductsByCategory, createProduct, updateProduct, deleteProduct} from "../controllers/products.controller";

const router = Router();

router.get("/", getAllProducts);

router.get("/category/:categoryId", getProductsByCategory);

router.get("/:productId", getProductsById);


export default router;