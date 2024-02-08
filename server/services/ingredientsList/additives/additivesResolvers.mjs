// Additives Resolvers

import AdditivesModel from "./AdditivesModel.mjs";

export const additivesResolvers = {
  Query: {
    getAllAdditives: async () => {
      return await AdditivesModel.find({});
    },
    getAdditiveById: async (_, { additiveID }) => {
      return await AdditivesModel.findById(additiveID);
    },
  },
  Mutation: {
    addAdditives: async (_, { additiveName, additiveAmount }) => {
      const additive = await AdditivesModel.create({
        additiveName,
        additiveAmount,
      });
      return additive;
    },
  },
};
