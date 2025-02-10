import express from "express";
import sessionRouter from "./session/session-routes";
// import sessionRouter from "./session/session-routes";

const authRouter = express.Router();
console.log("test");

authRouter.get("/session", sessionRouter);
