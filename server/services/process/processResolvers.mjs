// Process Resolvers

import ProcessModel from "./ProcessModel.mjs";
import BeerMasterModel from "../beerMaster/BeerMasterModel.mjs";

export const processResolvers = {
  Query: {
    // Get all processes within a beerMaster using the beerMaster ID
    getAllProcessesByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster = await BeerMasterModel.findById(beerMasterId).populate("process");
      return beerMaster.process;
    },
    // Get one process using the process ID
    getOneProcessById: async (_, { processId }) => {
      const process = await ProcessModel.findById(processId)
        .populate("mashing")
        .populate("lautering")
        .populate("wort")
        .populate("clarification")
        .populate("cooling")
        .populate("fermentation")
        .populate("conditioning");
      return process;
    },
  },
  Mutation: {
    // Create a process within a beerMaster using the beerMaster ID
    createProcess: async (_, { beerMasterId }) => {
      const process = await ProcessModel.create({});
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      beerMaster.process.push(process);
      await beerMaster.save();
      return process;
    },
    // Remove a process within a beerMaster using the beerMaster ID and the process ID
    removeProcess: async (_, { processId, beerMasterId }) => {
      const process = await ProcessModel.findByIdAndDelete(processId);
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      beerMaster.process.pull(process);
      await beerMaster.save();
      return process;
    },
    // Update a process within a beerMaster using the process ID
    updateProcess: async (_, { processId }) => {
      const process = await ProcessModel.findById(processId);
      process.lastModified = Date.now();
      await process.save();
      return process;
    },
  },
};
