import express from "express";
import * as controllers from "../controllers/package";
const router = express.Router();
import verifyToken from "../middlewares/verifyToken";

router.get("/all", controllers.getAllPackage);

router.use(verifyToken);
router.get("/package-admin", controllers.getPackageLimitAdmin);
router.post("/create-package", controllers.createPackage);
router.put("/update-package", controllers.updatePackage);
router.delete("/delete-package", controllers.deletePackage);

export default router;
