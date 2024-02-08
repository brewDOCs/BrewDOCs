// Water Resolvers

import WaterModel from "./WaterModel.mjs";

export const waterResolvers = {
  Query: {
    getAllWater: async () => {
      return await WaterModel.find({});
    },
    getWaterById: async (_, { waterId }) => {
      return await WaterModel.findById(waterId);
    },
  },
  Mutation: {
    addWater: async (_, { waterAlkalinity, waterAmount }) => {
      const water = await WaterModel.create({ waterAlkalinity, waterAmount });
      return water;
    },
  },
};
