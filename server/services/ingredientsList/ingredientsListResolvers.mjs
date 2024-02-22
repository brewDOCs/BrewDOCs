// Ingredients List Resolvers

import IngredientsListModel from "./IngredientsListModel.mjs";
import BeerMasterModel from "../beerMaster/BeerMasterModel.mjs";

export const ingredientsListResolvers = {
  Query: {
    // get all ingredientsList by beerMasterID
    getAllIngredientsListByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster = await BeerMasterModel.findById(beerMasterId).populate("ingredientsList");
      return beerMaster.ingredientsList;
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
    // create ingredientsList and add it to beerMaster's ingredientsList array
    createIngredientsList: async (_, { beerMasterId }) => {
      const ingredientsList = await IngredientsListModel.create({});
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      beerMaster.ingredientsList.push(ingredientsList);
      await beerMaster.save();
      return ingredientsList;
    },
    // remove ingredientList by beerMasterID and remove from beerMaster's ingredientsList array
    removeIngredientsList: async (_, { ingredientListId, beerMasterId }) => {
      const ingredientsList = await IngredientsListModel.findByIdAndDelete(ingredientListId);
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      beerMaster.ingredientsList.pull(ingredientsList);
      await beerMaster.save();
      return ingredientsList;
    },
    // update ingredientList by beerMasterId only touching the lastmodified field
    updateIngredientsList: async (_, { ingredientListId, beerMasterId }) => {
      const ingredientsList = await IngredientsListModel.findById(ingredientListId);
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      ingredientsList.lastmodified = Date.now();
      await beerMaster.save();
      return ingredientsList;
    },
  },
};
