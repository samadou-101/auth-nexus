import express from "express";
import dotenv from "dotenv";
import { sessionMiddleware } from "./config/session-config";
import authRouter from "./routes/auth/auth-routes";
import { connectDB } from "./config/db";
const app = express();

app.use(express.json());
app.use(sessionMiddleware);

app.use("/auth", authRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(3000, () => console.log("Server is running on port 3000"));
  } catch (error) {
    console.error("Server failed to start: ", error);
  }
};

startServer();
