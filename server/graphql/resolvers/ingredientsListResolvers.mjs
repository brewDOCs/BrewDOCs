// Ingredients List Resolvers

import IngredientsList from "../../models/IngredientsList.mjs";

export const ingredientsListResolvers = {
  Query: {
    // these are for admin use and should NOT be used in the client
    getAllIngredientsList: async () => {
      return await IngredientsList.find({});
    },
    getIngredients: async (_, { id }) => {
      return await IngredientsList.findById(id);
    },
  },
  Mutation: {
    // these are for admin use and should NOT be used in the client
    addIngredientsList: async (_, { name }) => {
      const ingredientsList = await IngredientsList.create({
        name,
      });
      return ingredientsList;
    },
    addToIngredientsList: async (
      _,
      { malt, water, hops, yeast, additives }
    ) => {
      const ingredientsList = await IngredientsList.create({
        malt,
        water,
        hops,
        yeast,
        additives,
      });
      return ingredientsList;
    },
  },
};
