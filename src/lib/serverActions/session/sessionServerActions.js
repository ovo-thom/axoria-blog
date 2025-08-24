"use server";
import { User } from "@/lib/models/user";
import { connectToDB } from "@/lib/utils/db/connectToDB";
import slugify from "slugify";
import bcrypt from "bcryptjs";

export async function register(formData) {
  const { userName, email, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (userName.length < 3) {
    throw new Error("Username is too short");
  }

  if (password.length < 6) {
    throw new Error("Password is too short");
  }

  if (password !== passwordRepeat) {
    throw new Error("Passwords do not match");
  }

  try {
    connectToDB();
    const user = await User.findOne({ userName });

    if (user) {
      throw new Error("Username already exists");
    }

    const normalizedUserName = slugify(userName, { lower: true, strict: true });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      normalizedUserName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    console.log("saved to db");

    return { success: true };
  } catch (error) {
    console.log("Error while signin up the user :", error);

    throw new Error(
      error.message || "An error occured while signin up the user"
    );
  }
}
