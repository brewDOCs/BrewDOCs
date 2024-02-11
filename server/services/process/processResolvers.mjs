// Process Resolvers

import ProcessModel from "./ProcessModel.mjs";
import BeerMasterModel from "../beerMaster/BeerMasterModel.mjs";

export const processResolvers = {
  Query: {
    // Get all processes within a beerMaster using the beerMaster ID
    getAllProcessesByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("process");
      return beerMaster.process;
    },
    // Get one process within a beerMaster using the beerMaster ID and the process ID
    getOneProcessByBeerMasterId: async (_, { beerMasterId, processId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("process");
      return beerMaster.process.filter(
        (process) => process._id.toString() === processId,
      )[0];
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
    // Update a process within a beerMaster using the beerMaster ID and the process ID
    updateProcess: async (_, { processId, beerMasterId }) => {
      const process = await ProcessModel.findById(processId);
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      process.lastModified = Date.now();
      await beerMaster.save();
      return process;
    },
  },
};
