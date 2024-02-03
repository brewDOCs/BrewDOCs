// Additives Resolvers

import Additives from "../../models/Additives.mjs";

export const additivesResolvers = {
  Query: {
    getAllAdditives: async () => {
      return await Additives.find({});
    },
    getAdditiveById: async (_, { additiveID }) => {
      return await Additives.findById(additiveID);
    },
  },
  Mutation: {
    addAdditives: async (_, { additiveName, additiveAmount }) => {
      const additive = await Additives.create({
        additiveName,
        additiveAmount,
      });
      return additive;
    },
  },
};
