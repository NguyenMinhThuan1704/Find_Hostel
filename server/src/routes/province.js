import express from "express";
import * as controllers from "../controllers/province";
const router = express.Router();
import verifyToken from "../middlewares/verifyToken";

router.use(verifyToken);
router.get("/province-admin", controllers.getProvincesLimitAdmin);
router.post("/create-province", controllers.createProvinces);
router.put("/update-province", controllers.updateProvinces);
router.delete("/delete-province", controllers.deleteProvinces);

export default router;
