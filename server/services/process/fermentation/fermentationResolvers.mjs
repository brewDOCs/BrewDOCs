// Fermentation Resolvers

import FermentationModel from "./FermentationModel.mjs";
import BeerMasterModel from "../../beerMaster/BeerMasterModel.mjs";

export const fermentationResolvers = {
  Query: {
    getAllFermentation: async () => {
      return await FermentationModel.find({});
    },
    getFermentationById: async (_, { id }) => {
      return await FermentationModel.findById(id);
    },
    getAllFermentationByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("fermentation");
      return beerMaster.fermentation;
    },
    getOneFermentationByBeerMasterId: async (
      _,
      { beerMasterId, fermentationId },
    ) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("fermentation");
      return beerMaster.fermentation.filter(
        (fermentation) => fermentation._id.toString() === fermentationId,
      );
    },
  },
  Mutation: {
    addFermentation: async (
      _,
      {
        fermentationDescription,
        fermentationTemperature,
        fermentationStartTime,
        fermentationEndTime,
      },
    ) => {
      const fermentation = await FermentationModel.create({
        fermentationDescription,
        fermentationTemperature,
        fermentationStartTime,
        fermentationEndTime,
      });
      return fermentation;
    },
  },
};
