import express from "express";
import * as controllers from "../controllers/price";
const router = express.Router();
import verifyToken from "../middlewares/verifyToken";

router.get("/all", controllers.getPrices);

router.use(verifyToken);
router.get("/price-admin", controllers.getPricesLimitAdmin);
router.post("/create-price", controllers.createPrices);
router.put("/update-price", controllers.updatePrices);
router.delete("/delete-price", controllers.deletePrices);

export default router;
