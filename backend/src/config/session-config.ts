import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import { DB_URI, SESSION_SECRET } from "./config";
dotenv.config();
export const sessionMiddleware = session({
  secret: SESSION_SECRET || "default_secret",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: DB_URI,
    collectionName: "sessions",
    ttl: 14 * 24 * 60 * 60,
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    secure: false,
  },
});
