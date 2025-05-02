const express = "express";
import { Router } from "express";
import {
  getAllPosts,
  getSinglePost,
  updatePost,
  createPost,
  deletePost,
  searchPosts,
} from "../controllers/posts.js";

const router = Router();

// api
router.get("/posts", getAllPosts);
router.get("/posts/:id", getSinglePost);
router.post("/create", createPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.get("/post/search", searchPosts);

export default router;
