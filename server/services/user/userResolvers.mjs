// User Resolvers

import UserModel from "./UserModel.mjs";
import { generateToken } from "../../utils/SecretToken.mjs";

export const userResolvers = {
  Query: {
    getUsers: async () => {
      return await UserModel.find({});
    },
    getOneUser: async (_, { _id }) => {
      return await UserModel.findById(_id);
    },
  },
  Mutation: {
    // this is admin only
    addUser: async (_, { username, email, password }) => {
      const user = await UserModel.create({ username, email, password });
      return user;
    },
    // delete user and all veerMasters associated with user
    deleteUser: async (_, { _id }) => {
      const user = await UserModel.findByIdAndDelete(_id);
      return user;
    },
    // this is client only
    // login user and set token as a cookie
    login: async (_, { username, password }, { res }) => {
      const user = await UserModel.findOne({ username, password });
      if (!user) {
        throw new Error("No user with that username or password found!");
      }
      const token = generateToken(username);
      res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
      return user; // Return the user object
    },
    // signup user and set token as a cookie
    signup: async (_, { username, email, password }, { res }) => {
      const user = await UserModel.create({ username, email, password });
      const token = generateToken(username);
      res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
      return { username }; // Return only username if needed
    },
  },
};
