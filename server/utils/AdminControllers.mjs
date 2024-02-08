import User from "../models/User.mjs";
import { generateToken } from "./SecretToken.mjs";

export const userControllers = {
  getUsers: async () => {
    return await User.find({});
  },
  getOneUser: async (_id) => {
    return await User.findById(_id);
  },
  addUser: async (username, email, password) => {
    const user = await User.create({ username, email, password });
    return user;
  },
  deleteUser: async (_id) => {
    const user = await User.findByIdAndDelete(_id);
    return user;
  },
  login: async (username, password, res) => {
    const user = await User.findOne({ username, password });
    if (!user) {
      throw new Error("No user with that username or password found!");
    }
    const token = generateToken(username);
    res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
    return user; // Return the user object
  },
  signup: async (username, email, password, res) => {
    const user = await User.create({ username, email, password });
    const token = generateToken(username);
    res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
    return { username }; // Return only username if needed
  },
};
