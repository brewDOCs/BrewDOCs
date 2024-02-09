// Wort Resolvers

import WortModel from "./WortModel.mjs";
import BeerMasterModel from "../../beerMaster/BeerMasterModel.mjs";

export const wortResolvers = {
  Query: {
    getAllWort: async () => {
      return await WortModel.find({});
    },
    getWortById: async (_, { id }) => {
      return await WortModel.findById(id);
    },
    getAllWortByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("wort");
      return beerMaster.wort;
    },
    getOneWortByBeerMasterId: async (_, { beerMasterId, wortId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("wort");
      return beerMaster.wort.filter((wort) => wort._id.toString() === wortId);
    },
  },
  Mutation: {
    addWort: async (
      _,
      { wortDescription, wortTemperature, wortStartTime, wortEndTime },
    ) => {
      const wort = await WortModel.create({
        wortDescription,
        wortTemperature,
        wortStartTime,
        wortEndTime,
      });
      return wort;
    },
  },
};
