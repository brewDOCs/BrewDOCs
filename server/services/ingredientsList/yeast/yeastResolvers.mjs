// Yeast Resolvers

import YeastModel from "./YeastModel.mjs";
import IngredientsListModel from "../IngredientsListModel.mjs";

export const yeastResolvers = {
  Query: {
    // these are for admin use only and should be removed in production
    getAllYeast: async () => {
      return await YeastModel.find({});
    },
    getYeastById: async (_, { yeastId }) => {
      return await YeastModel.findById(yeastId);
    },
    // these are for client side use
    retrieveAllYeastByIngredientsListId: async (_, { ingredientsListId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate(
          "yeast",
        );
      return ingredientsList.yeast;
    },
    retrieveOneYeastByIngredientsListId: async (
      _,
      { ingredientsListId, yeastId },
    ) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate(
          "yeast",
        );
      return ingredientsList.yeast.filter(
        (yeast) => yeast._id.toString() === yeastId,
      )[0];
    },
  },
  Mutation: {
    // these are for admin use only and should be removed in production
    addYeast: async (_, { yeastName, yeastAmount }) => {
      const yeast = await YeastModel.create({ yeastName, yeastAmount });
      return yeast;
    },
    // these are for client side use
    createYeastByIngredientsList: async (
      _,
      {
        ingredientsListId,
        yeastName,
        strainType,
        strainSubType,
        attenuation,
        flocculation,
        yeastAmount,
      },
    ) => {
      const yeast = await YeastModel.create({
        yeastName,
        strainType,
        strainSubType,
        attenuation,
        flocculation,
        yeastAmount,
      });
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId);
      ingredientsList.yeast.push(yeast);
      await ingredientsList.save();
      return yeast;
    },
    updateYeast: async (
      _,
      {
        yeastId,
        yeastName,
        strainType,
        strainSubType,
        attenuation,
        flocculation,
        yeastAmount,
      },
    ) => {
      const yeast = await YeastModel.findByIdAndUpdate(
        yeastId,
        {
          yeastName,
          strainType,
          strainSubType,
          attenuation,
          flocculation,
          yeastAmount,
        },
        { new: true },
      );
      return yeast;
    },
    removeYeastByIngredientsList: async (_, { ingredientsListId, yeastId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId);
      const yeast = await YeastModel.findByIdAndDelete(yeastId);
      ingredientsList.yeast.pull(yeast);
      await ingredientsList.save();
      return yeast;
    },
  },
};
