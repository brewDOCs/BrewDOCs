// Conditioning Resolvers

import ConditioningModel from "./ConditioningModel.mjs";
import BeerMasterModel from "../../beerMaster/BeerMasterModel.mjs";

export const conditioningResolvers = {
  Query: {
    getAllConditioning: async () => {
      return await ConditioningModel.find({});
    },
    getConditioningById: async (_, { id }) => {
      return await ConditioningModel.findById(id);
    },
    getAllConditioningByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("conditioning");
      return beerMaster.conditioning;
    },
    getOneConditioningByBeerMasterId: async (
      _,
      { beerMasterId, conditioningId },
    ) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("conditioning");
      return beerMaster.conditioning.filter(
        (conditioning) => conditioning._id.toString() === conditioningId,
      );
    },
  },
  Mutation: {
    addConditioning: async (
      _,
      {
        conditioningDescription,
        conditioningTemperature,
        conditioningStartTime,
        conditioningEndTime,
      },
    ) => {
      const conditioning = await ConditioningModel.create({
        conditioningDescription,
        conditioningTemperature,
        conditioningStartTime,
        conditioningEndTime,
      });
      return conditioning;
    },
  },
};
