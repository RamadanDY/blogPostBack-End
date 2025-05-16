import UserSchema from "../models/users.js";
// this is used to harsh passwords ie bcrypt
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function register(req, res, next) {
  try {
    //   res.send("helo");
    const { username, password, role } = req.body;
    //   the 10 added is a salt value that added to make sure similar passwords dont have the same hashed details
    const hashedpassword = await bcrypt.hash(password, 10);
    //   console.log(hashedpassword);

    // 2. lets save the users details
    const saveUser = new UserSchema({
      username,
      password: hashedpassword,
      role,
    });
    await saveUser.save();
    res
      .status(201)
      .json({ message: `User registered with the username ${username}` });
  } catch (error) {
    res.status(500).json(error, { message: `smt went wrong` });
    console.log(error);
  }
}

export async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await UserSchema.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ message: `usename is  not found ${username}` });
    }
    // lets match the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: `invalid credentials` });
    }
    // lets generate a token and give it back to the user
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      message: `user logged in successfully`,
      token,
    });
    // lets send the token to the user
  } catch (error) {
    res.status(500).json({ message: `smt went wrong` });
    console.log(error);
  }
}
