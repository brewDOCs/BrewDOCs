// Clarification Resolvers

import ClarificationModel from "./ClarificationModel.mjs";
import ProcessModel from "../ProcessModel.mjs";

export const clarificationResolvers = {
  Query: {
    getAllClarificationStepsByProcessId: async (_, { processId }) => {
      const process =
        await ProcessModel.findById(processId).populate("clarification");
      return process.clarification;
    },
    getOneClarificationStepByProcessId: async (
      _,
      { processId, clarificationId },
    ) => {
      const process =
        await ProcessModel.findById(processId).populate("clarification");
      return process.clarification.filter(
        (clarification) => clarification._id.toString() === clarificationId,
      )[0];
    },
  },
  Mutation: {
    // Create clarification step by processId and push it to the process's clarification array
    createClarificationStep: async (
      _,
      {
        processId,
        clarificationDescription,
        clarificationTemperature,
        clarificationStartTime,
        clarificationEndTime,
        clarificationElapsedTime,
        clarificationNotificationTime,
        additives,
      },
    ) => {
      const clarification = await ClarificationModel.create({
        clarificationDescription,
        clarificationTemperature,
        clarificationStartTime,
        clarificationEndTime,
        clarificationElapsedTime,
        clarificationNotificationTime,
        additives,
      });
      const process = await ProcessModel.findById(processId);
      process.clarification.push(clarification);
      await process.save();
      return clarification;
    },
    // Remove clarification step by processId and remove from process's clarification array
    removeClarificationStep: async (_, { processId, clarificationId }) => {
      const process = await ProcessModel.findById(processId);
      const clarification =
        await ClarificationModel.findByIdAndDelete(clarificationId);
      process.clarification.pull(clarification);
      await process.save();
      return clarification;
    },
    // Update clarification step by clarificationId
    updateClarificationStep: async (
      _,
      {
        clarificationId,
        clarificationDescription,
        clarificationTemperature,
        clarificationStartTime,
        clarificationEndTime,
        clarificationElapsedTime,
        clarificationNotificationTime,
        additives,
      },
    ) => {
      const clarification = await ClarificationModel.findByIdAndUpdate(
        clarificationId,
        {
          clarificationDescription,
          clarificationTemperature,
          clarificationStartTime,
          clarificationEndTime,
          clarificationElapsedTime,
          clarificationNotificationTime,
          additives,
        },
        { new: true },
      );
      return clarification;
    },
  },
};
