import express from "express";
import * as postController from "../controllers/post";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.get("/all", postController.getPost);
router.get("/limit", postController.getPostsLimit);
router.get("/new-post", postController.getNewPost);

router.use(verifyToken);
router.get("/post-admin", postController.getPostsLimitAdmin);
router.post("/create-post", postController.createNewPost);

export default router;
