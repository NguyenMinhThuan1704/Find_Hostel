import express from "express";
import * as controllers from "../controllers/categories";
const router = express.Router();
import verifyToken from "../middlewares/verifyToken";

router.get("/all", controllers.getAllCategories);

router.use(verifyToken);
router.get("/cate-admin", controllers.getCategoriesLimitAdmin);
router.post("/create-cate", controllers.createCategories);
router.put("/update-cate", controllers.updateCategories);
router.delete("/delete-cate", controllers.deleteCategories);

export default router;
