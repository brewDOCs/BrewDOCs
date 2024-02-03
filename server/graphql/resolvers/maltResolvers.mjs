// Malt Resolvers

import Malt from "../../models/Malt.mjs";

export const maltResolvers = {
  Query: {
    getAllMalts: async () => {
      return await Malt.find({});
    },
    getMaltById: async (_, { maltId }) => {
      return await Malt.findById(maltId);
    },
  },
  Mutation: {
    addMalt: async (_, { maltName, maltAmount }) => {
      const malt = await Malt.create({ maltName, maltAmount });
      return malt;
    },
  },
};
