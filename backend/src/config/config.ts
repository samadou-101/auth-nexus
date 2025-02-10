import dotenv from "dotenv";

dotenv.config();

export const DB_URI = process.env.DB_URI;
export const SESSION_SECRET = process.env.SESSION_SECRET;
