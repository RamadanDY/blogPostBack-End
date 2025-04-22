import express from "express";
import mongoose from "mongoose";
const app = express();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(":hello");
});
