import express from "express";
import verifyToken from "../middlewares/verifyToken";
import * as userControllers from "../controllers/user";

const router = express.Router();

router.use(verifyToken);
router.get("/get-crr", userControllers.getCrrUser);

export default router;
