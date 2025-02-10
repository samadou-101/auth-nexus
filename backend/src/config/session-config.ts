import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import { SESSION_SECRET } from "./config";
dotenv.config();
export const sessionMiddleware = session({
  secret: SESSION_SECRET || "default_secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60,
  },
});
