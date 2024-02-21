// Cooling Step Resolvers

import CoolingModel from "./CoolingModel.mjs";
import ProcessModel from "../ProcessModel.mjs";
import DateScalarType from "../../../utils/DateScalarType.mjs";

export const coolingResolvers = {
  // Custom scalar type for handling Date objects
  Date: DateScalarType,
  Query: {
    getAllCoolingStepsByProcessId: async (_, { processId }) => {
      const process =
        await ProcessModel.findById(processId).populate("cooling");
      return process.cooling;
    },
    getOneCoolingStepByProcessId: async (_, { processId, coolingId }) => {
      const process =
        await ProcessModel.findById(processId).populate("cooling");
      return process.cooling.filter(
        (cooling) => cooling._id.toString() === coolingId,
      )[0];
    },
  },
  Mutation: {
    // Create cooling step by processId and push it to the process's cooling array
    createCoolingStep: async (
      _,
      {
        processId,
        coolingDescription,
        coolingTemperature,
        coolingStartTime,
        coolingEndTime,
        coolingElapsedTime,
        coolingNotificationTime,
        hops,
        additives,
      },
    ) => {
      const cooling = await CoolingModel.create({
        coolingDescription,
        coolingTemperature,
        coolingStartTime,
        coolingEndTime,
        coolingElapsedTime,
        coolingNotificationTime,
        hops,
        additives,
      });
      const process = await ProcessModel.findById(processId);
      process.cooling.push(cooling);
      await process.save();
      return cooling;
    },
    // Remove cooling step by processId and remove from process's cooling array
    removeCoolingStep: async (_, { processId, coolingId }) => {
      const process = await ProcessModel.findById(processId);
      const cooling = await CoolingModel.findByIdAndDelete(coolingId);
      process.cooling.pull(cooling);
      await process.save();
      return cooling;
    },
    // Update cooling step by coolingId
    updateCoolingStep: async (
      _,
      {
        coolingId,
        coolingDescription,
        coolingTemperature,
        coolingStartTime,
        coolingEndTime,
        coolingElapsedTime,
        coolingNotificationTime,
        hops,
        additives,
      },
    ) => {
      const cooling = await CoolingModel.findByIdAndUpdate(
        coolingId,
        {
          coolingDescription,
          coolingTemperature,
          coolingStartTime,
          coolingEndTime,
          coolingElapsedTime,
          coolingNotificationTime,
          hops,
          additives,
        },
        { new: true },
      );
      return cooling;
    },
  },
};
