import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectionString = process.env.Database_URL;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("✅ Database has been connected");
  })
  .catch((err) => {
    console.log("❌ Database couldn't be connected", err);
  });
