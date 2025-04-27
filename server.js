import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRouter from "./routes/posts.js";

dotenv.config();
const app = express();

app.use("/api", postRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`💫Server is running on port ${PORT}`);
});
