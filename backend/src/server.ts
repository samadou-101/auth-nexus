import express from "express";
import dotenv from "dotenv";
import { sessionMiddleware } from "./config/session-config";
import authRouter from "./routes/auth/auth-routes";
const app = express();

app.use(express.json());
app.use(sessionMiddleware);

app.use("/auth", authRouter);
