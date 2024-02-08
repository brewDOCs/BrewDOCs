// Malt Resolvers

import MaltModel from "./MaltModel.mjs";

export const maltResolvers = {
  Query: {
    getAllMalts: async () => {
      return await MaltModel.find({});
    },
    getMaltById: async (_, { maltId }) => {
      return await MaltModel.findById(maltId);
    },
  },
  Mutation: {
    addMalt: async (_, { maltName, maltAmount }) => {
      const malt = await MaltModel.create({ maltName, maltAmount });
      return malt;
    },
  },
};
