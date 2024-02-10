// Malt Resolvers

import MaltModel from "./MaltModel.mjs";
import IngredientsListModel from "../IngredientsListModel.mjs";

export const maltResolvers = {
  Query: {
    // This is for admin use only and should be removed in production
    getAllMalts: async () => {
      return await MaltModel.find({});
    },
    getMaltById: async (_, { maltId }) => {
      return await MaltModel.findById(maltId);
    },
    // This for client side use
    retrieveAllMaltsByIngredientsListId: async (_, { ingredientsListId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("malt");
      return ingredientsList.malt;
    },
    retrieveOneMaltByIngredientsListId: async (
      _,
      { ingredientsListId, maltId },
    ) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("malt");
      return ingredientsList.malt.filter(
        (malt) => malt._id.toString() === maltId,
      )[0];
    },
  },
  Mutation: {
    // This is for admin use only and should be removed in production
    addMalt: async (_, { maltName, maltAmount }) => {
      const malt = await MaltModel.create({ maltName, maltAmount });
      return malt;
    },
    // This for client side use
    createMaltByIngredientsList: async (
      _,
      {
        ingredientsListId,
        maltName,
        lovibondColorScale,
        sucrosePointsPerPoundPerGallon,
        diastaticPower,
        maltAmount,
      },
    ) => {
      const malt = await MaltModel.create({
        maltName,
        lovibondColorScale,
        sucrosePointsPerPoundPerGallon,
        diastaticPower,
        maltAmount,
      });
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId);
      ingredientsList.malt.push(malt);
      await ingredientsList.save();
      return malt;
    },
    updateMalt: async (
      _,
      {
        maltId,
        maltName,
        lovibondColorScale,
        sucrosePointsPerPoundPerGallon,
        diastaticPower,
        maltAmount,
      },
    ) => {
      const malt = await MaltModel.findByIdAndUpdate(
        maltId,
        {
          maltName,
          lovibondColorScale,
          sucrosePointsPerPoundPerGallon,
          diastaticPower,
          maltAmount,
        },
        { new: true },
      );
      return malt;
    },
    removeMaltByIngredientsList: async (_, { ingredientsListId, maltId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId);
      const malt = await MaltModel.findByIdAndDelete(maltId);
      ingredientsList.malt.pull(malt);
      await ingredientsList.save();
      return malt;
    },
  },
};
