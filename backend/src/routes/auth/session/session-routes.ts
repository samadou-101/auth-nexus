import express from "express";
import * as sessoinController from "../../../controllers/auth/sessionControllers";
import { isAuthenticated } from "../../../middleware/auth/session/sessionMiddleware";

const sessionRouter = express.Router();

sessionRouter.get("/", isAuthenticated, sessoinController.getAllUsers);
sessionRouter.post("/", sessoinController.handleSignup);

export default sessionRouter;
