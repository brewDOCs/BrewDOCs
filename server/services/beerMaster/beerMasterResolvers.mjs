// BeerMaster Resolvers

import BeerMasterModel from "./BeerMasterModel.mjs";
import BreweryModel from "../brewery/BreweryModel.mjs";

export const beerMasterResolvers = {
  Query: {
    // get all beerMasters by breweryId
    getAllBeerMastersByBreweryId: async (_, { breweryId }) => {
      const brewery = await BreweryModel.findById(breweryId)
        .populate("beerMasters")
        .populate("beerMasters.brewRun");
      return brewery.beerMasters;
    },
    getOneBeerMasterById: async (_, { beerMasterId }) => {
      const beerMaster = await BeerMasterModel.findById(beerMasterId).populate("brewRun");
      return beerMaster;
    },
  },
  Mutation: {
    // create BeerMaster and add it to brewery's beerMasters array
    createBeerMasterByBreweryId: async (_, { name, type, breweryId }) => {
      const beerMaster = await BeerMasterModel.create({ name, type });
      const brewery = await BreweryModel.findById(breweryId);
      brewery.beerMasters.push(beerMaster);
      await brewery.save();
      return beerMaster;
    },
    // update BeerMaster by beerMasterId
    updateBeerMaster: async (_, { beerMasterId, name, type, description, abv, ibu, image }) => {
      const beerMaster = await BeerMasterModel.findByIdAndUpdate(
        beerMasterId,
        { name, description, type, abv, ibu, image },
        { new: true },
      );
      return beerMaster;
    },
    // remove BeerMaster by beerMasterId and remove from brewery's beerMasters array
    removeBeerMasterByBreweryId: async (_, { beerMasterId, breweryId }) => {
      const beerMaster = await BeerMasterModel.findByIdAndDelete(beerMasterId);
      const brewery = await BreweryModel.findById(breweryId);
      brewery.beerMasters.pull(beerMaster);
      await brewery.save();
      return brewery;
    },
  },
};
