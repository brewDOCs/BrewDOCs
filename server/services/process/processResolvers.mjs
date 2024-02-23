// Process Resolvers

import ProcessModel from "./ProcessModel.mjs";
import BrewRunModel from "../beerMaster/brewRun/BrewRunModel.mjs";

export const processResolvers = {
  Query: {
    // Get all processes within a brewRun using the brewRunId
    getAllProcessesByBrewRunId: async (_, { brewRunId }) => {
      const brewRun = await BrewRunModel.findById(brewRunId).populate("process");
      return brewRun.process;
    },
    // Get one process using processId
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
    // Create a process and add it to the brewRun's process array
    createProcess: async (_, { brewRunId }) => {
      const process = await ProcessModel.create({});
      const brewRun = await BrewRunModel.findById(brewRunId);
      brewRun.process.push(process);
      await brewRun.save();
      return process;
    },
    // Remove a process within a brewRun using the brewRunId and the processId
    removeProcess: async (_, { processId, brewRunId }) => {
      const process = await ProcessModel.findByIdAndDelete(processId);
      const brewRun = await BrewRunModel.findById(brewRunId);
      brewRun.process.pull(process);
      await brewRun.save();
      return process;
    },
    // Update a process within a brewRun using the processId
    updateProcess: async (_, { processId }) => {
      const process = await ProcessModel.findById(processId);
      process.lastModified = Date.now();
      await process.save();
      return process;
    },
  },
};
