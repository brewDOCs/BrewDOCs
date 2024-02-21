// Fermentation Step Resolvers

import FermentationModel from "./FermentationModel.mjs";
import ProcessModel from "../ProcessModel.mjs";
import DateScalarType from "../../../utils/dateScalarType.mjs";

export const fermentationResolvers = {
  // Custom scalar type for handling Date objects
  Date: DateScalarType,
  Query: {
    getAllFermentationStepsByProcessId: async (_, { processId }) => {
      const process =
        await ProcessModel.findById(processId).populate("fermentation");
      return process.fermentation;
    },
    getOneFermentationStepByProcessId: async (
      _,
      { processId, fermentationId },
    ) => {
      const process =
        await ProcessModel.findById(processId).populate("fermentation");
      return process.fermentation.filter(
        (fermentation) => fermentation._id.toString() === fermentationId,
      )[0];
    },
  },
  Mutation: {
    // Create fermentation step by processId and push it to the process's fermentation array
    createFermentationStep: async (
      _,
      {
        processId,
        fermentationDescription,
        fermentationTemperature,
        fermentationStartTime,
        fermentationEndTime,
        fermentationElapsedTime,
        fermentationNotificationTime,
        yeast,
        additives,
      },
    ) => {
      const fermentation = await FermentationModel.create({
        fermentationDescription,
        fermentationTemperature,
        fermentationStartTime,
        fermentationEndTime,
        fermentationElapsedTime,
        fermentationNotificationTime,
        yeast,
        additives,
      });
      const process = await ProcessModel.findById(processId);
      process.fermentation.push(fermentation);
      await process.save();
      return fermentation;
    },
    // Remove fermentation step by processId and remove from process's fermentation array
    removeFermentationStep: async (_, { processId, fermentationId }) => {
      const process = await ProcessModel.findById(processId);
      const fermentation =
        await FermentationModel.findByIdAndDelete(fermentationId);
      process.fermentation.pull(fermentation);
      await process.save();
      return fermentation;
    },
    // Update fermentation step by fermentationId
    updateFermentationStep: async (
      _,
      {
        fermentationId,
        fermentationDescription,
        fermentationTemperature,
        fermentationStartTime,
        fermentationEndTime,
        fermentationElapsedTime,
        fermentationNotificationTime,
        yeast,
        additives,
      },
    ) => {
      const fermentation = await FermentationModel.findByIdAndUpdate(
        fermentationId,
        {
          fermentationDescription,
          fermentationTemperature,
          fermentationStartTime,
          fermentationEndTime,
          fermentationElapsedTime,
          fermentationNotificationTime,
          yeast,
          additives,
        },
        { new: true },
      );
      return fermentation;
    },
  },
};
