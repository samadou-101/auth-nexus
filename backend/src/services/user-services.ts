import { IUser, User } from "../models/user-model.js";
import { encryptPassword } from "../utils/encryptionUtils.js";

// CREATE A USER IN THE DB
export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<string> => {
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    throw new Error("User already exists!");
  }

  try {
    const hashedPassword = await encryptPassword(password);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    console.log("User Created Successfully!");
    return user._id.toString();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error during user creation", error.message);
    } else {
      console.log("Unknown Error occured!");
    }
    throw new Error("User Creation Failed!");
  }
};
