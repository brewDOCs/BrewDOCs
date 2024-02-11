// Lautering Resolvers

import LauteringModel from "./LauteringModel.mjs";
import ProcessModel from "../ProcessModel.mjs";

export const lauteringResolvers = {
  Query: {
    getAllLauteringStepsByProcessId: async (_, { processId }) => {
      const process =
        await ProcessModel.findById(processId).populate("lautering");
      return process.lautering;
    },
    getOneLauteringStepByProcessId: async (_, { processId, lauteringId }) => {
      const process =
        await ProcessModel.findById(processId).populate("lautering");
      return process.lautering.filter(
        (lautering) => lautering._id.toString() === lauteringId,
      )[0];
    },
  },
  Mutation: {
    // Create lautering step by processId and push it to the process's lautering array
    createLauteringStep: async (
      _,
      {
        processId,
        lauteringDescription,
        lauteringTemperature,
        lauteringStartTime,
        lauteringEndTime,
        lauteringElapsedTime,
        lauteringNotificationTime,
      },
    ) => {
      const lautering = await LauteringModel.create({
        lauteringDescription,
        lauteringTemperature,
        lauteringStartTime,
        lauteringEndTime,
        lauteringElapsedTime,
        lauteringNotificationTime,
      });
      const process = await ProcessModel.findById(processId);
      process.lautering.push(lautering);
      await process.save();
      return lautering;
    },
    // Remove lautering step by processId and remove from process's lautering array
    removeLauteringStep: async (_, { processId, lauteringId }) => {
      const process = await ProcessModel.findById(processId);
      const lautering = await LauteringModel.findByIdAndDelete(lauteringId);
      process.lautering.pull(lautering);
      await process.save();
      return lautering;
    },
    // Update lautering step by lauteringId
    updateLauteringStep: async (
      _,
      {
        lauteringId,
        lauteringDescription,
        lauteringTemperature,
        lauteringStartTime,
        lauteringEndTime,
        lauteringElapsedTime,
        lauteringNotificationTime,
      },
    ) => {
      const lautering = await LauteringModel.findByIdAndUpdate(
        lauteringId,
        {
          lauteringDescription,
          lauteringTemperature,
          lauteringStartTime,
          lauteringEndTime,
          lauteringElapsedTime,
          lauteringNotificationTime,
        },
        { new: true },
      );
      return lautering;
    },
  },
};
