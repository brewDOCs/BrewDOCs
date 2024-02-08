import UserModel from "../services/user/UserModel.mjs";
import { generateToken } from "./SecretToken.mjs";

export const userControllers = {
  getUsers: async () => {
    return await UserModel.find({});
  },
  getOneUser: async (_id) => {
    return await UserModel.findById(_id);
  },
  addUser: async (username, email, password) => {
    const user = await UserModel.create({ username, email, password });
    return user;
  },
  deleteUser: async (_id) => {
    const user = await UserModel.findByIdAndDelete(_id);
    return user;
  },
  login: async (username, password, res) => {
    const user = await UserModel.findOne({ username, password });
    if (!user) {
      throw new Error("No user with that username or password found!");
    }
    const token = generateToken(username);
    res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
    return user; // Return the user object
  },
  signup: async (username, email, password, res) => {
    const user = await UserModel.create({ username, email, password });
    const token = generateToken(username);
    res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
    return { username }; // Return only username if needed
  },
};
