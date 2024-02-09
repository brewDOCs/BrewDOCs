// Mashing Resolvers

import MashingModel from "./MashingModel.mjs";
import BeerMasterModel from "../../beerMaster/BeerMasterModel.mjs";

export const mashingResolvers = {
  Query: {
    getAllMashing: async () => {
      return await MashingModel.find();
    },
    getMashingById: async (_, { id }) => {
      return await MashingModel.findById(id);
    },
    getAllMashingByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("mashing");
      return beerMaster.mashing;
    },
    getOneMashingByBeerMasterId: async (_, { beerMasterId, mashingId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("mashing");
      return beerMaster.mashing.filter(
        (mashing) => mashing._id.toString() === mashingId,
      );
    },
  },
  Mutation: {
    addMashing: async (
      _,
      {
        mashingDescription,
        mashingTemperature,
        mashingStartTime,
        mashingEndTime,
      },
    ) => {
      const mashing = await MashingModel.create({
        mashingDescription,
        mashingTemperature,
        mashingStartTime,
        mashingEndTime,
      });
      return mashing;
    },
  },
};
