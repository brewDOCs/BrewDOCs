// Lautering Resolvers

import LauteringModel from "./LauteringModel.mjs";
import BeerMasterModel from "../../beerMaster/BeerMasterModel.mjs";

export const lauteringResolvers = {
  Query: {
    getAllLautering: async () => {
      return await LauteringModel.find({});
    },
    getLauteringById: async (_, { id }) => {
      return await LauteringModel.findById(id);
    },
    getAllLauteringByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("lautering");
      return beerMaster.lautering;
    },
    getOneLauteringByBeerMasterId: async (_, { beerMasterId, lauteringId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("lautering");
      return beerMaster.lautering.filter(
        (lautering) => lautering._id.toString() === lauteringId,
      );
    },
  },
  Mutation: {
    addLautering: async (
      _,
      {
        lauteringDescription,
        lauteringTemperature,
        lauteringStartTime,
        lauteringEndTime,
      },
    ) => {
      const lautering = await LauteringModel.create({
        lauteringDescription,
        lauteringTemperature,
        lauteringStartTime,
        lauteringEndTime,
      });
      return lautering;
    },
  },
};
