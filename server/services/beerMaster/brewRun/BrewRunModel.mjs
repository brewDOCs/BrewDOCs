// BrewRun Model

import { Schema, model } from "mongoose";

const brewRunSchema = new Schema({
  status: {
    type: String,
    required: true,
    enum: ["active", "completed", "canceled"],
    default: "active",
  },
  ingredientsList: [
    {
      type: Schema.Types.ObjectId,
      ref: "IngredientsList",
    },
  ],
  process: [
    {
      type: Schema.Types.ObjectId,
      ref: "Process",
    },
  ],
  lastModified: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
});

const BrewRunModel = model("BrewRun", brewRunSchema);

export default BrewRunModel;
