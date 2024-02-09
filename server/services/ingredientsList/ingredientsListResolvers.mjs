// Ingredients List Resolvers

import IngredientsListModel from "./IngredientsListModel.mjs";
import BeerMasterModel from "../beerMaster/BeerMasterModel.mjs";

export const ingredientsListResolvers = {
  Query: {
    // these are for admin use and should NOT be used in the client
    getAllIngredientsList: async () => {
      return await IngredientsListModel.find({});
    },
    getIngredients: async (_, { id }) => {
      return await IngredientsListModel.findById(id);
    },
    // these are for admin use and should NOT be used in the client
    // get all ingredientsList by beerMaster
    getAllIngredientsListByBeerMasterID: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate(
          "ingredientsList",
        );
      return beerMaster.ingredientsList;
    },
    // get one ingredientsList by beerMaster
    getOneIngredientsListByBeerMasterId: async (
      _,
      { beerMasterId, ingredientsListId },
    ) => {
      const beerMaster = s;
      await BeerMasterModel.findById(beerMasterId).populate("ingredientsList");
      return beerMaster.ingredientsList.filter(
        (ingredientsList) =>
          ingredientsList._id.toString() === ingredientsListId,
      );
    },
  },
  Mutation: {
    // these are for admin use and should NOT be used in the client
    addIngredientsList: async (_, {}) => {
      const ingredientsList = await IngredientsListModel.create({});
      return ingredientsList;
    },
    // these are for admin use and should NOT be used in the client
    // create ingredientList by beerMaster with only the name required and add it to the ingredientsList array in the beerMaster
    createIngredientsList: async (_, { beerMasterId }) => {
      const ingredientsList = await IngredientsListModel.create({});
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      beerMaster.ingredientsList.push(ingredientsList);
      await beerMaster.save();
      return ingredientsList;
    },
    // remove ingredientList by beerMasterID and remove from beerMaster's ingredientsList array
    removeIngredientsList: async (_, { id, beerMasterId }) => {
      const ingredientsList = await IngredientsListModel.findByIdAndDelete(id);
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      beerMaster.ingredientsList.pull(ingredientsList);
      await beerMaster.save();
      return ingredientsList;
    },
    // update ingredientList by beerMasterId only touching the lastmodified field
    updateIngredientsList: async (_, { id, beerMasterId }) => {
      const ingredientsList = await IngredientsListModel.findById(id);
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      ingredientsList.lastmodified = Date.now();
      await beerMaster.save();
      return ingredientsList;
    },
  },
};
