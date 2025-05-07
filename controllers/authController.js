import UserSchema from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export function register(req, res, nest) {
  res.send("helo");
  const { username, password, role } = req.body;
}

export function login(req, res, next) {
  res.send("login");
}
