// Additives Resolvers

import AdditivesModel from "./AdditivesModel.mjs";
import IngredientsListModel from "../IngredientsListModel.mjs";

export const additivesResolvers = {
  Query: {
    // get all additives by ingeddientsListId
    getAllAdditivesByIngredientsListId: async (_, { ingredientsListId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("additives");
      return ingredientsList.additives;
    },
    // get one additive by additiveID and ingredientsListId
    getOneAdditiveByIdAndIngredientsListId: async (_, { additiveId, ingredientsListId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("additives");
      return ingredientsList.additives.filter(
        (additive) => additive._id.toString() === additiveId,
      )[0];
    },
    // get all additives by ingredientsListId and additiveType
    getAllAdditivesByIngredientsListIdAndAdditiveType: async (
      _,
      { ingredientsListId, additiveType },
    ) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate("additives");
      return ingredientsList.additives.filter((additive) => additive.additiveType === additiveType);
    },
  },
  Mutation: {
    // create additive by ingredientsList with only the name and type required and add it to the additives array in the ingredientsList
    createAdditiveByIngredientsListID: async (
      _,
      { ingredientsListId, additiveName, additiveType, additiveAmount },
    ) => {
      const additive = await AdditivesModel.create({
        additiveName,
        additiveType,
        additiveAmount,
      });
      const ingredientsList = await IngredientsListModel.findById(ingredientsListId);
      ingredientsList.additives.push(additive);
      await ingredientsList.save();
      return additive;
    },
    // update additive by additiveId
    updateAdditive: async (_, { additiveId, additiveName, additiveType, additiveAmount }) => {
      const additive = await AdditivesModel.findByIdAndUpdate(
        additiveId,
        { additiveName, additiveType, additiveAmount },
        { new: true },
      );
      return additive;
    },
    // remove additive by ingredientsListId and additiveId
    removeAdditiveByIngredientsListID: async (_, { ingredientsListId, additiveId }) => {
      const ingredientsList = await IngredientsListModel.findById(ingredientsListId);
      const additive = await AdditivesModel.findByIdAndDelete(additiveId);
      ingredientsList.additives.pull(additive);
      await ingredientsList.save();
      return additive;
    },
  },
};
