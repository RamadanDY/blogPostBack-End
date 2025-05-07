import UserSchema from "../models/users.js";
// this is used to harsh passwords ie bcrypt
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function register(req, res, nest) {
  res.send("helo");
  const { username, password, role } = req.body;
  const hashedpassword = bcrypt.hash();
}

export function login(req, res, next) {
  res.send("login");
}
