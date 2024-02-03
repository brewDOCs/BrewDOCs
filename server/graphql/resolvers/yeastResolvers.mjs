// Yeast Resolvers

import Yeast from "../../models/Yeast.mjs";

export const yeastResolvers = {
  Query: {
    getAllYeast: async () => {
      return await Yeast.find({});
    },
    getYeastById: async (_, { yeastId }) => {
      return await Yeast.findById(yeastId);
    },
  },
  Mutation: {
    addYeast: async (_, { yeastName, yeastAmount }) => {
      const yeast = await Yeast.create({ yeastName, yeastAmount });
      return yeast;
    },
  },
};
