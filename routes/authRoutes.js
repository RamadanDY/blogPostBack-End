import {
  register,
  login,
  admin,
  manager,
  user,
} from "../controllers/authController.js";
import express from "express";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/admin", admin);
router.get("/manager", manager);
router.get("/user", user);

export default router;
