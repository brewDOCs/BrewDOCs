// Hops Resolvers

import HopsModel from "./HopsModel.mjs";

export const hopsResolvers = {
  Query: {
    getAllHops: async () => {
      return await HopsModel.find({});
    },
    getHopsById: async (_, { hopsId }) => {
      return await HopsModel.findById(hopsId);
    },
  },
  Mutation: {
    addHops: async (_, { hopsName, hopsAmount }) => {
      const hops = await HopsModel.create({ hopsName, hopsAmount });
      return hops;
    },
  },
};
