// Water Resolvers

import WaterModel from "./WaterModel.mjs";
import IngredientsListModel from "../IngredientsListModel.mjs";

export const waterResolvers = {
  Query: {
    // get all water by ingredientsListId
    retrieveAllWaterByIngredientsListID: async (_, { ingredientsListId }) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate(
          "water",
        );
      return ingredientsList.water;
    },
    // get one water by ingredientsListId and waterId
    retrieveOneWaterByIngredientsListID: async (
      _,
      { ingredientsListId, waterId },
    ) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId).populate(
          "water",
        );
      return ingredientsList.water.filter(
        (water) => water._id.toString() === waterId,
      )[0];
    },
  },
  Mutation: {
    // add water by ingredientsList with only the waterAlkalinity required and add it to the water array in the ingredientsList
    createWaterByIngredientsListID: async (
      _,
      {
        ingredientsListId,
        waterAlkalinity,
        waterCalcium,
        waterMagnesium,
        waterSodium,
        waterSulfate,
        waterChloride,
        waterAmount,
      },
    ) => {
      const water = await WaterModel.create({
        waterAlkalinity,
        waterCalcium,
        waterMagnesium,
        waterSodium,
        waterSulfate,
        waterChloride,
        waterAmount,
      });
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId);
      ingredientsList.water.push(water);
      await ingredientsList.save();
      return water;
    },
    // update water by ingredientsListId and waterId
    updateWater: async (
      _,
      {
        waterId,
        waterAlkalinity,
        waterCalcium,
        waterMagnesium,
        waterSodium,
        waterSulfate,
        waterChloride,
        waterAmount,
      },
    ) => {
      const water = await WaterModel.findByIdAndUpdate(
        waterId,
        {
          waterAlkalinity,
          waterCalcium,
          waterMagnesium,
          waterSodium,
          waterSulfate,
          waterChloride,
          waterAmount,
        },
        { new: true },
      );
      return water;
    },
    // remove water by ingredientsListId and waterId
    removeWaterByIngredientsListID: async (
      _,
      { ingredientsListId, waterId },
    ) => {
      const ingredientsList =
        await IngredientsListModel.findById(ingredientsListId);
      const water = await WaterModel.findByIdAndDelete(waterId);
      ingredientsList.water.pull(water);
      await ingredientsList.save();
      return water;
    },
  },
};
