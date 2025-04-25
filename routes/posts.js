const express = "express";
import { Router } from "express";
import { getAllBlocks } from "../controllers/posts";

const router = Router();

router.get("/", getAllBlocks);

export default Router;
