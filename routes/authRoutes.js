import {
  register,
  login,
  admin,
  manager,
  user,
} from "../controllers/authController.js";
import verifyToken from "../middleware/authMiddleware.js"; // Use import instead of require
import express from "express";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/admin", verifyToken, admin);
router.get("/manager", manager);
router.get("/user", user);

export default router;
