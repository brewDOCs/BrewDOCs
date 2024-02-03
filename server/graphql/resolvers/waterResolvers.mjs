// Water Resolvers

import Water from "../../models/Water.mjs";

export const waterResolvers = {
  Query: {
    getAllWater: async () => {
      return await Water.find({});
    },
    getWaterById: async (_, { waterId }) => {
      return await Water.findById(waterId);
    },
  },
  Mutation: {
    addWater: async (_, { waterAlkalinity, waterAmount }) => {
      const water = await Water.create({ waterAlkalinity, waterAmount });
      return water;
    },
  },
};
