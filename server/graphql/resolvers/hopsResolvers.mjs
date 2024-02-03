// Hops Resolvers

import Hops from "../../models/Hops.mjs";

export const hopsResolvers = {
  Query: {
    getAllHops: async () => {
      return await Hops.find({});
    },
    getHopsById: async (_, { hopsId }) => {
      return await Hops.findById(hopsId);
    },
  },
  Mutation: {
    addHops: async (_, { hopsName, hopsAmount }) => {
      const hops = await Hops.create({ hopsName, hopsAmount });
      return hops;
    },
  },
};
