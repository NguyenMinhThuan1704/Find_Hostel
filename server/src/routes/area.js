import express from "express";
import * as controllers from "../controllers/area";
import verifyToken from "../middlewares/verifyToken";
const router = express.Router();

router.get("/all", controllers.getAreas);

router.use(verifyToken);
router.get("/area-admin", controllers.getAreasLimitAdmin);
router.post("/create-area", controllers.createAreas);
router.put("/update-area", controllers.updateAreas);
router.delete("/delete-area", controllers.deleteAreas);

export default router;
