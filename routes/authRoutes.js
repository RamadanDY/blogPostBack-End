import {
  register,
  login,
  admin,
  manager,
  user,
} from "../controllers/authController.js";
import verifyToken from "../middleware/authMiddleware.js"; // Use import instead of require
import authorizeRole from "../middleware/roleMiddleware.js";
import express from "express";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/admin", verifyToken, authorizeRole("admin"), admin);
router.get("/manager", verifyToken, authorizeRole("admin", "manager"), manager);
router.get(
  "/user",
  verifyToken,
  authorizeRole("user", "manager", "admin"),
  user
);

export default router;
