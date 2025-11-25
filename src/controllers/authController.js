
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        status: "error",
        data: {
          username: user.name,
          email: user.email
        }
      });
    }

    const salt = await bcrypt.genSalt(Number(process.env.ENCRYPT_SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
      gender
    });

    await newUser.save();
console.log("User registered:", newUser)
    res.status(201).json({
      message: "User registered successfully",
      status: "success",
      data: {
        username: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      status: "error"
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User does not exist with this email",
        status: "error",
        data: { email },
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid password",
        status: "error"
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_AUTH_SECRET_KEY, { expiresIn: "3h" });
    res.status(200).json({
      message: "Login successful",
      status: "success",
      data: { token }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      status: "error"
    });
  }
};