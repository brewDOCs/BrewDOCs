// Mashing Step Resolvers

import MashingModel from "./MashingModel.mjs";
import ProcessModel from "../ProcessModel.mjs";
import DateScalarType from "../../../utils/DateScalarType.mjs";

export const mashingResolvers = {
  // Custom scalar type for handling Date objects
  Date: DateScalarType,
  Query: {
    getAllMashingStepsByProcessId: async (_, { processId }) => {
      const process =
        await ProcessModel.findById(processId).populate("mashing");
      return process.mashing;
    },
    getOneMashingStepByProcessId: async (_, { processId, mashingId }) => {
      const process =
        await ProcessModel.findById(processId).populate("mashing");
      return process.mashing.filter(
        (mashing) => mashing._id.toString() === mashingId,
      )[0];
    },
  },
  Mutation: {
    // Create mashing step by processId and push it to the process's mashing array
    createMashingStep: async (
      _,
      {
        processId,
        mashingDescription,
        mashingTemperature,
        mashingStartTime,
        mashingEndTime,
        mashingElapsedTime,
        mashingNotificationTime,
        malt,
        water,
        additives,
      },
    ) => {
      const mashing = await MashingModel.create({
        mashingDescription,
        mashingTemperature,
        mashingStartTime,
        mashingEndTime,
        mashingElapsedTime,
        mashingNotificationTime,
        malt,
        water,
        additives,
      });
      const process = await ProcessModel.findById(processId);
      process.mashing.push(mashing);
      await process.save();
      return mashing;
    },
    // Remove mashing step by processId and remove from process's mashing array
    removeMashingStep: async (_, { processId, mashingId }) => {
      const process = await ProcessModel.findById(processId);
      const mashing = await MashingModel.findByIdAndDelete(mashingId);
      process.mashing.pull(mashing);
      await process.save();
      return mashing;
    },
    // Update mashing step by mashingId
    updateMashingStep: async (
      _,
      {
        mashingId,
        mashingDescription,
        mashingTemperature,
        mashingStartTime,
        mashingEndTime,
        mashingElapsedTime,
        mashingNotificationTime,
        malt,
        water,
        additives,
      },
    ) => {
      const mashing = await MashingModel.findByIdAndUpdate(
        mashingId,
        {
          mashingDescription,
          mashingTemperature,
          mashingStartTime,
          mashingEndTime,
          mashingElapsedTime,
          mashingNotificationTime,
          malt,
          water,
          additives,
        },
        { new: true },
      );
      return mashing;
    },
  },
};
