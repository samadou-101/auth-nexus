import { Request, Response } from "express";
import { createUser } from "../../services/user-services";
import { User } from "../../models/user-model";
import bcrypt from "bcrypt";

export const handleSignup = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await createUser(firstName, lastName, email, password);
    req.session.user = { id: user, email: "" };
    res.status(201).json({ message: "User created succefflly" });
  } catch (error) {
    console.log("error creating user");
    if (error instanceof Error) {
      if (error.message === "User already exists!") {
        res.status(409).json({ message: "User already exists!" });
        return;
      }
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
export const handleLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    req.session.user = { id: user._id.toString(), email: user.email };
    console.log("from controller " + req.session.user);
    res.status(200).json({ msg: "Login Successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserByID = async (req: Request, res: Response) => {
  try {
    // Ensure the session has a user
    if (!req.session.user) {
      res.status(401).json({ msg: "Unauthorized!" });
      return;
    }

    // Extract user ID from session
    const userId = req.session.user.id;

    // Find user by ID in the database
    const user = await User.findById(userId).select("-password");

    if (!user) {
      res.status(404).json({ msg: "User not found!" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ msg: "Internal server error!" });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
