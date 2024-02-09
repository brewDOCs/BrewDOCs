// Process Resolvers

import ProcessModel from "./ProcessModel.mjs";
import BeerMasterModel from "../beerMaster/BeerMasterModel.mjs";

export const processResolvers = {
  Query: {
    getAllProcesses: async () => {
      return await ProcessModel.find({});
    },
    getProcessById: async (_, { id }) => {
      return await ProcessModel.findById(id);
    },
    getAllProcessesByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("process");
      return beerMaster.process;
    },
    getOneProcessByBeerMasterId: async (_, { beerMasterId, processId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("process");
      return beerMaster.process.filter(
        (process) => process._id.toString() === processId,
      );
    },
  },
  Mutation: {
    addProcess: async (_, {}) => {
      const process = await ProcessModel.create({});
      return process;
    },
    addProcessByBeerMasterId: async (_, { beerMasterId }) => {
      const process = await ProcessModel.create({});
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      beerMaster.process.push(process);
      await beerMaster.save();
      return process;
    },
  },
};
