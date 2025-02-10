import express from "express";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { sessionMiddleware } from "./config/session-config";
import authRouter from "./routes/auth/auth-routes";
import { connectDB } from "./config/db";
import sessionRouter from "./routes/auth/session/session-routes";
const app = express();

app.use(express.json());
app.use(sessionMiddleware);

// app.use("/", (req, res) => res.send("hello"));
app.use("/auth", authRouter);
app.use("/auth/session", sessionRouter);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});
const startServer = async () => {
  try {
    await connectDB();
    app.listen(3000, () => console.log("Server is running on port 3000"));
  } catch (error) {
    console.error("Server failed to start: ", error);
  }
};

startServer();
