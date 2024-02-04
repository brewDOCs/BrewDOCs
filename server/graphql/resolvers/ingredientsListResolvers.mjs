// Ingredients List Resolvers

import IngredientsList from "../../models/IngredientsList.mjs";

export const ingredientsListResolvers = {
  Query: {
    getIngredients: async (_, { id }) => {
      return await IngredientsList.findById(id);
    },
    getAllIngredients: async () => {
      return await IngredientsList.find({});
    },
  },
  Mutation: {
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
