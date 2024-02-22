// Yeast Resolvers

import YeastModel from "./YeastModel.mjs";
import IngredientsListModel from "../IngredientsListModel.mjs";

export const yeastResolvers = {
  Query: {
    // get all yeasts by ingredientsListId
    getAllYeastByIngredientsListId: async (_, { ingredientsListId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("yeast");
      return ingredientsList.yeast;
    },
    // get one yeast by ingredientsListId and yeastId
    getOneYeastByIngredientsListId: async (_, { ingredientsListId, yeastId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("yeast");
      return ingredientsList.yeast.filter((yeast) => yeast._id.toString() === yeastId)[0];
    },
  },
  Mutation: {
    // create yeast by ingredientsListId with only the name and type required and add it to the yeast array in the ingredientsList
    createYeastByIngredientsListId: async (
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
      const ingredientsList = await IngredientsListModel.findById(ingredientsListId);
      ingredientsList.yeast.push(yeast);
      await ingredientsList.save();
      return yeast;
    },
    // update yeast by yeastId
    updateYeast: async (
      _,
      { yeastId, yeastName, strainType, strainSubType, attenuation, flocculation, yeastAmount },
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
    // remove yeast by ingredientsListId and yeastId
    removeYeastByIngredientsListId: async (_, { ingredientsListId, yeastId }) => {
      const ingredientsList = await IngredientsListModel.findById(ingredientsListId);
      const yeast = await YeastModel.findByIdAndDelete(yeastId);
      ingredientsList.yeast.pull(yeast);
      await ingredientsList.save();
      return yeast;
    },
  },
};
