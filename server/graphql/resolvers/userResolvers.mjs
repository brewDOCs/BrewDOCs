// User Resolvers

import User from "../../models/User.mjs";

export const userResolvers = {
  Query: {
    getUsers: async () => {
      return await User.find({});
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },
  },
};
