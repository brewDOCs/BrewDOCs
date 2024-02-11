// Wort Resolvers

import WortModel from "./WortModel.mjs";
import ProcessModel from "../ProcessModel.mjs";

export const wortResolvers = {
  Query: {
    getAllWortByProcessId: async (_, { processId }) => {
      const process = await ProcessModel.findById(processId).populate("wort");
      return process.wort;
    },
    getOneWortByProcessId: async (_, { processId, wortId }) => {
      const process = await ProcessModel.findById(processId).populate("wort");
      return process.wort.filter((wort) => wort._id.toString() === wortId);
    },
  },
  Mutation: {
    // Create wort step by processId and push it to the process's wort array
    createWortStep: async (
      _,
      {
        processId,
        wortDescription,
        wortTemperature,
        wortStartTime,
        wortEndTime,
        wortElapsedTime,
        wortNotificationTime,
        hops,
        additives,
      },
    ) => {
      const wort = await WortModel.create({
        wortDescription,
        wortTemperature,
        wortStartTime,
        wortEndTime,
        wortElapsedTime,
        wortNotificationTime,
        hops,
        additives,
      });
      const process = await ProcessModel.findById(processId);
      process.wort.push(wort);
      await process.save();
      return wort;
    },
    // Remove wort step by processId and remove from process's wort array
    removeWortStep: async (_, { processId, wortId }) => {
      const process = await ProcessModel.findById(processId);
      const wort = await WortModel.findByIdAndDelete(wortId);
      process.wort.pull(wort);
      await process.save();
      return wort;
    },
    // Update wort step by wortId
    updateWortStep: async (
      _,
      {
        wortId,
        wortDescription,
        wortTemperature,
        wortStartTime,
        wortEndTime,
        wortElapsedTime,
        wortNotificationTime,
        hops,
        additives,
      },
    ) => {
      const wort = await WortModel.findByIdAndUpdate(
        wortId,
        {
          wortDescription,
          wortTemperature,
          wortStartTime,
          wortEndTime,
          wortElapsedTime,
          wortNotificationTime,
          hops,
          additives,
        },
        { new: true },
      );
      return wort;
    },
  },
};
