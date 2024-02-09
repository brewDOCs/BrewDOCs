// Fermentation Model

import { Schema, model } from "mongoose";

const FermentationSchema = new Schema({
  fermentationDescription: {
    type: String,
    trim: true,
  },
  fermentationTemperature: {
    type: Number,
  },
  fermentationStartTime: {
    type: Date,
    default: Date.now,
  },
  fermentationEndTime: {
    type: Date,
    default: Date.now,
  },
  yeast: {
    type: Schema.Types.ObjectId,
    ref: "Yeast",
  },
  additives: {
    type: Schema.Types.ObjectId,
    ref: "Additives",
  },
});

const FermentationModel = model("Fermentation", FermentationSchema);

export default FermentationModel;
