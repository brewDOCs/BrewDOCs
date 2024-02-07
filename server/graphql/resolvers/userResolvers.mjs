// User Resolvers

import User from "../../models/User.mjs";
import { verifyToken, generateToken } from "../../utils/SecretToken.mjs";

export const userResolvers = {
  Query: {
    getUsers: async () => {
      return await User.find({});
    },
    getOneUser: async (_, { _id }) => {
      return await User.findById(_id);
    },
  },
  Mutation: {
    // this is admin only
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
    // this is client only
    // login user and generate token with user ID
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username, password });
      if (!user) {
        throw new Error("No user with that username or password found!");
      }
      const token = generateToken(username);
      return { user, token };
    },
    // signup user and add token to user
    signup: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = generateToken(username);
      return { user, token };
    },
  },
};
