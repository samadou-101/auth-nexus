import express from "express";
import sessionRouter from "./session/session-routes";
import { isAuthenticated } from "../../middleware/auth/session/sessionMiddleware";

const authRouter = express.Router();

authRouter.use("/session", sessionRouter);

export default authRouter;
