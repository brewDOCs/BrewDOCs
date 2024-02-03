// Ingredients List Resolvers

import Ingredients from "../../models/Ingredients.mjs";
import Malt from "../../models/Malt.mjs";
import Water from "../../models/Water.mjs";
import Hops from "../../models/Hops.mjs";
import Yeast from "../../models/Yeast.mjs";
import Additives from "../../models/Additives.mjs";

export const ingredientsResolvers = {
  Query: {
    getAllIngredients: async () => {
      return await Ingredients.find({});
    },
    getIngredientsById: async (_, { ingredientsId }) => {
      return await Ingredients.findById(ingredientsId);
    },
  },
  Mutation: {
    addToIngredientsList: async (_, { malt, water, hops, yeast, additives }) => {
      const ingredients = await Ingredients.create({
        malt,
        water,
        hops,
        yeast,
        additives,
      });
      return ingredients;
    },
  },
  Ingredients: {
    malt: async (parent) => {
      return await Malt.findById(parent.malt);
    },
    water: async (parent) => {
      return await Water.findById(parent.water);
    },
    hops: async (parent) => {
      return await Hops.findById(parent.hops);
    },
    yeast: async (parent) => {
      return await Yeast.findById(parent.yeast);
    },
    additives: async (parent) => {
      return await Additives.findById(parent.additives);
    },
  },
};
