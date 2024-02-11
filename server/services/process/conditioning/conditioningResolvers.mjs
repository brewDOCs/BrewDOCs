// Conditioning Resolvers

import ConditioningModel from "./ConditioningModel.mjs";
import ProcessModel from "../ProcessModel.mjs";

export const conditioningResolvers = {
  Query: {
    getAllConditioningStepsByProcessId: async (_, { processId }) => {
      const process =
        await ProcessModel.findById(processId).populate("conditioning");
      return process.conditioning;
    },
    getOneConditioningStepByProcessId: async (
      _,
      { processId, conditioningId },
    ) => {
      const process =
        await ProcessModel.findById(processId).populate("conditioning");
      return process.conditioning.filter(
        (conditioning) => conditioning._id.toString() === conditioningId,
      );
    },
  },
  Mutation: {
    // Create conditioning step by processId and push it to the process's conditioning array
    createConditioningStep: async (
      _,
      {
        processId,
        conditioningDescription,
        conditioningTemperature,
        conditioningStartTime,
        conditioningEndTime,
        conditioningElapsedTime,
        conditioningNotificationTime,
      },
    ) => {
      const conditioning = await ConditioningModel.create({
        conditioningDescription,
        conditioningTemperature,
        conditioningStartTime,
        conditioningEndTime,
        conditioningElapsedTime,
        conditioningNotificationTime,
      });
      const process = await ProcessModel.findById(processId);
      process.conditioning.push(conditioning);
      await process.save();
      return conditioning;
    },
    // Remove conditioning step by processId and remove from process's conditioning array
    removeConditioningStep: async (_, { processId, conditioningId }) => {
      const process = await ProcessModel.findById(processId);
      const conditioning =
        await ConditioningModel.findByIdAndDelete(conditioningId);
      process.conditioning.pull(conditioning);
      await process.save();
      return conditioning;
    },
    // Update conditioning step by conditioningId
    updateConditioningStep: async (
      _,
      {
        conditioningId,
        conditioningDescription,
        conditioningTemperature,
        conditioningStartTime,
        conditioningEndTime,
        conditioningElapsedTime,
        conditioningNotificationTime,
      },
    ) => {
      const conditioning = await ConditioningModel.findByIdAndUpdate(
        conditioningId,
        {
          conditioningDescription,
          conditioningTemperature,
          conditioningStartTime,
          conditioningEndTime,
          conditioningElapsedTime,
          conditioningNotificationTime,
        },
        { new: true },
      );
      return conditioning;
    },
  },
};
