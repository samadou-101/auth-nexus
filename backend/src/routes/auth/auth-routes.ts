import express from "express";
import sessionRouter from "./session/session-routes";

const authRouter = express.Router();

authRouter.get("/session", sessionRouter);

export default authRouter;
