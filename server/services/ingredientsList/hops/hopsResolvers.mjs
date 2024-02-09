// Hops Resolvers

import HopsModel from "./HopsModel.mjs";
import IngredientsListModel from "../IngredientsListModel.mjs";

export const hopsResolvers = {
  Query: {
    // this is for the admin and should not be used in the client
    getAllHops: async () => {
      return await HopsModel.find({});
    },
    getHopsById: async (_, { hopsId }) => {
      return await HopsModel.findById(hopsId);
    },
    // this is for the client and should be used in the client
    retrieveHopsByIngredientsListID: async (_, { ingredientsListId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("hops");
      return ingredientsList.hops;
    },
    retrieveOneHopsByIngredientsListID: async (
      _,
      { ingredientsListId, hopsId },
    ) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("hops");
      return ingredientsList.hops.filter(
        (hops) => hops._id.toString() === hopsId,
      )[0];
    },
  },
  Mutation: {
    // this is for the admin and should not be used in the client
    addHops: async (_, { hopsName, hopsAmount }) => {
      const hops = await HopsModel.create({ hopsName, hopsAmount });
      return hops;
    },
    // this is for the client and should be used in the client
    createHopsByIngredientsListID: async (
      _,
      { ingredientsListId, hopsName, hopsAlphaAcid, hopsType, hopsAmount },
    ) => {
      const hops = await HopsModel.create({
        hopsName,
        hopsAlphaAcid,
        hopsType,
        hopsAmount,
      });
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId);
      ingredientsList.hops.push(hops);
      await ingredientsList.save();
      return hops;
    },
    updateHops: async (
      _,
      { hopsId, hopsName, hopsAlphaAcid, hopsType, hopsAmount },
    ) => {
      const hops = await HopsModel.findByIdAndUpdate(
        hopsId,
        { hopsName, hopsAlphaAcid, hopsType, hopsAmount },
        { new: true },
      );
      return hops;
    },
    removeHopsByIngredientsListID: async (_, { ingredientsListId, hopsId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId);
      const hops = await HopsModel.findByIdAndDelete(hopsId);
      ingredientsList.hops.pull(hops);
      await ingredientsList.save();
      return hops;
    },
  },
};
