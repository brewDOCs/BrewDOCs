// Ingredients List Model

import { Schema, model } from "mongoose";

const ingredientsListSchema = new Schema({
  malt: [
    {
      type: Schema.Types.ObjectId,
      ref: "Malt",
    },
  ],
  water: [
    {
      type: Schema.Types.ObjectId,
      ref: "Water",
    },
  ],
  hops: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hops",
    },
  ],
  yeast: [
    {
      type: Schema.Types.ObjectId,
      ref: "Yeast",
    },
  ],
  additives: [
    {
      type: Schema.Types.ObjectId,
      ref: "Additives",
    },
  ],
  lastmodified: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
});

const IngredientsListModel = model("IngredientsList", ingredientsListSchema);

export default IngredientsListModel;
