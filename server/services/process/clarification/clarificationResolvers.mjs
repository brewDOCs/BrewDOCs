// Clarification Resolvers

import ClarificationModel from "./ClarificationModel.mjs";
import BeerMasterModel from "../../beerMaster/BeerMasterModel.mjs";

export const clarificationResolvers = {
  Query: {
    getAllClarification: async () => {
      return await ClarificationModel.find({});
    },
    getClarificationById: async (_, { id }) => {
      return await ClarificationModel.findById(id);
    },
    getAllClarificationByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("clarification");
      return beerMaster.clarification;
    },
    getOneClarificationByBeerMasterId: async (
      _,
      { beerMasterId, clarificationId },
    ) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("clarification");
      return beerMaster.clarification.filter(
        (clarification) => clarification._id.toString() === clarificationId,
      );
    },
  },
  Mutation: {
    addClarification: async (
      _,
      {
        clarificationDescription,
        clarificationTemperature,
        clarificationStartTime,
        clarificationEndTime,
      },
    ) => {
      const clarification = await ClarificationModel.create({
        clarificationDescription,
        clarificationTemperature,
        clarificationStartTime,
        clarificationEndTime,
      });
      return clarification;
    },
  },
};
