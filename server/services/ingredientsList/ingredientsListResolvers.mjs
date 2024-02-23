// Ingredients List Resolvers

import IngredientsListModel from "./IngredientsListModel.mjs";
import BrewRunModel from "../beerMaster/brewRun/BrewRunModel.mjs";

export const ingredientsListResolvers = {
  Query: {
    // get all ingredientsList by brewRunID
    getAllIngredientsListsByBrewRunId: async (_, { brewRunId }) => {
      const brewRun = await BrewRunModel.findById(brewRunId).populate("ingredientsList");
      return brewRun.ingredientsList;
    },
    // get one ingredientsList by ingredientsListID
    getOneIngredientsListById: async (_, { ingredientsListId }) => {
      const ingredientsList = await IngredientsListModel.findById(ingredientsListId)
        .populate("malt")
        .populate("water")
        .populate("hops")
        .populate("yeast")
        .populate("additives");
      return ingredientsList;
    },
  },

  Mutation: {
    // create ingredientsList and add it to brewRun's ingredientsList array
    createIngredientsList: async (_, { brewRunId }) => {
      const ingredientsList = await IngredientsListModel.create({});
      const brewRun = await BrewRunModel.findById(brewRunId);
      brewRun.ingredientsList.push(ingredientsList);
      await brewRun.save();
      return ingredientsList;
    },
    // remove ingredientList by brewRunId and remove from brewRun's ingredientsList array
    removeIngredientsList: async (_, { ingredientListId, brewRunId }) => {
      const ingredientsList = await IngredientsListModel.findByIdAndDelete(ingredientListId);
      const brewRun = await BrewRunModel.findById(brewRunId);
      brewRun.ingredientsList.pull(ingredientsList);
      await brewRun.save();
      return ingredientsList;
    },
    // update ingredientList by brewRunId only touching the lastmodified field
    updateIngredientsList: async (_, { ingredientListId, brewRunId }) => {
      const ingredientsList = await IngredientsListModel.findById(ingredientListId);
      const brewRun = await BrewRunModel.findById(brewRunId);
      ingredientsList.lastmodified = Date.now();
      await brewRun.save();
      return ingredientsList;
    },
  },
};
