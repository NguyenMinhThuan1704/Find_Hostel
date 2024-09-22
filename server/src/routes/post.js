import express from "express";
import * as postController from "../controllers/post";

const router = express.Router();

router.get("/all", postController.getPost);
router.get("/limit", postController.getPostLimit);
router.get("/new-post", postController.getNewPost);

export default router;
