import express from "express";
import * as controllers from "../controllers/categories";
const router = express.Router();

router.get("/all", controllers.getAllCategories);

export default router;
