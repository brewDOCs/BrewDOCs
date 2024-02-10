// Malt Resolvers

import MaltModel from "./MaltModel.mjs";
import IngredientsListModel from "../IngredientsListModel.mjs";

export const maltResolvers = {
  Query: {
    // get all malts by ingredientsListId
    retrieveAllMaltsByIngredientsListId: async (_, { ingredientsListId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("malt");
      return ingredientsList.malt;
    },
    // get one malt by ingredientsListId and maltId
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
    // create malt by ingredientsList with only the name required and add it to the malt array in the ingredientsList
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
    // update malt by ingredientsListId and maltId
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
    // remove malt by ingredientsListId and maltId
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
