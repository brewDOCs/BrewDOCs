// User Resolvers

import UserModel from "./UserModel.mjs";
import { generateToken } from "../../utils/SecretToken.mjs";

export const userResolvers = {
  Query: {
    getUsers: async () => {
      return await UserModel.find({});
    },
    getOneUser: async (_, { _id }) => {
      const user = await UserModel.findById(_id).populate("breweries");
      return user;
    },
  },
  Mutation: {
    // login user and set token as a cookie
    login: async (_, { username, password }, { res }) => {
      const user = await UserModel.findOne({ username });
      if (!user) {
        throw new Error("No user with that username found!");
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        throw new Error("Invalid password!");
      }
      // pull username and _id from user object and set them into the token
      const payload = { username: user.username, _id: user._id };
      const token = generateToken(payload);
      res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
      return payload; // Return only username and _id if needed
    },
    // signup user and set token as a cookie pulling the payload from the newly created user and setting it into the token
    signup: async (_, { username, email, password }, { res }) => {
      const user = await UserModel.create({ username, email, password });
      const payload = { username: user.username, _id: user._id };
      const token = generateToken(payload);
      res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
      return payload; // Return only username and _id if needed
    },
  },
};
