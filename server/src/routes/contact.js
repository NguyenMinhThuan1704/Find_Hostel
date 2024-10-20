import express from "express";
import * as contactController from "../controllers/contact";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();
router.use(verifyToken);
router.post("/create-contact", contactController.createContact);

export default router;
