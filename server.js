import express from "express";
import postRouter from "./routes/posts.js";
import { configDotenv } from "dotenv";
import authRoute from "./routes/authRoutes.js";
import("./db/db.js");
configDotenv();
const app = express();
app.use(express.json());

app.use("/api", postRouter);
app.use("/auth", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`💫Server is running on port ${PORT}`);
});
