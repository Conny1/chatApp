import express from "express";
import dotenv from "dotenv";
import userRoute from "./routers/user.js";
import cors from "cors";
import connect from "./config/db.js";
const app = express();
dotenv.config();
const PORT = 4500;

app.use(cors());
app.use(express.json());

// routes middleware
app.use("/api/user", userRoute);

app.listen(PORT, async () => {
  console.log("Sever is running");
  await connect();
});
