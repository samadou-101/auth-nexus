import mongoose from "mongoose";
import { DB_URI } from "./config";

export const connectDB = async () => {
  console.log(DB_URI);
  try {
    await mongoose.connect(DB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.error("mongoose failed to connect", error);
    throw new Error("DB connections failed");
  }
};
