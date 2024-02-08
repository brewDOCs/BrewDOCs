// Yeast Resolvers

import YeastModel from "./YeastModel.mjs";

export const yeastResolvers = {
  Query: {
    getAllYeast: async () => {
      return await YeastModel.find({});
    },
    getYeastById: async (_, { yeastId }) => {
      return await YeastModel.findById(yeastId);
    },
  },
  Mutation: {
    addYeast: async (_, { yeastName, yeastAmount }) => {
      const yeast = await YeastModel.create({ yeastName, yeastAmount });
      return yeast;
    },
  },
};
