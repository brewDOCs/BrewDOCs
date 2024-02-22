// Hops Resolvers

import HopsModel from "./HopsModel.mjs";
import IngredientsListModel from "../IngredientsListModel.mjs";

export const hopsResolvers = {
  Query: {
    // get all hops by ingredientsListId
    getHopsByIngredientsListID: async (_, { ingredientsListId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("hops");
      return ingredientsList.hops;
    },
    // get one hops by ingredientsListId and hopsId
    getOneHopsByIngredientsListID: async (_, { ingredientsListId, hopsId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("hops");
      return ingredientsList.hops.filter((hops) => hops._id.toString() === hopsId)[0];
    },
  },

  Mutation: {
    // create hops by ingredientsList with only the name required and add it to the hops array in the ingredientsList
    createHopsByIngredientsListId: async (
      _,
      { ingredientsListId, hopsName, hopsAlphaAcid, hopsType, hopsAmount },
    ) => {
      const hops = await HopsModel.create({
        hopsName,
        hopsAlphaAcid,
        hopsType,
        hopsAmount,
      });
      const ingredientsList = await IngredientsListModel.findById(ingredientsListId);
      ingredientsList.hops.push(hops);
      await ingredientsList.save();
      return hops;
    },
    // update hops by hopsId
    updateHops: async (_, { hopsId, hopsName, hopsAlphaAcid, hopsType, hopsAmount }) => {
      const hops = await HopsModel.findByIdAndUpdate(
        hopsId,
        { hopsName, hopsAlphaAcid, hopsType, hopsAmount },
        { new: true },
      );
      return hops;
    },
    // remove hops by ingredientsListId and hopsId
    removeHopsByIngredientsListId: async (_, { ingredientsListId, hopsId }) => {
      const ingredientsList = await IngredientsListModel.findById(ingredientsListId);
      const hops = await HopsModel.findByIdAndDelete(hopsId);
      ingredientsList.hops.pull(hops);
      await ingredientsList.save();
      return hops;
    },
  },
};
