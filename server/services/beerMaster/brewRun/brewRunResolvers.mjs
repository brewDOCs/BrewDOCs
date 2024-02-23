// BrewRun Resolvers

import BrewRunModel from "./BrewRunModel.mjs";
import BeerMasterModel from "../BeerMasterModel.mjs";

export const brewRunResolvers = {
  Query: {
    // get all brewRuns by beerMasterID
    getAllBrewRunsByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster = await BeerMasterModel.findById(beerMasterId).populate("brewRun");
      return beerMaster.brewRun;
    },
    // get one brewRun by brewRunID
    getOneBrewRunById: async (_, { brewRunId }) => {
      const brewRun = await BrewRunModel.findById(brewRunId)
        .populate("ingredientsList")
        .populate("process");
      return brewRun;
    },
  },
  Mutation: {
    // create brewRun and add it to beerMaster's brewRun array
    createBrewRun: async (_, { beerMasterId }) => {
      const brewRun = await BrewRunModel.create({});
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      beerMaster.brewRun.push(brewRun);
      await beerMaster.save();
      return brewRun;
    },
    // remove brewRun by beerMasterID and remove from beerMaster's brewRun array
    removeBrewRun: async (_, { brewRunId, beerMasterId }) => {
      const brewRun = await BrewRunModel.findByIdAndDelete(brewRunId);
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      beerMaster.brewRun.pull(brewRun);
      await beerMaster.save();
      return brewRun;
    },
    // update brewRun by beerMasterId only touching the lastmodified field
    updateBrewRun: async (_, { brewRunId, status }) => {
      const brewRun = await BrewRunModel.findByIdAndUpdate(brewRunId, { status }, { new: true });
      brewRun.lastModified = Date.now();
      await brewRun.save();
      return brewRun;
    },
  },
};
