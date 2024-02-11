// Fermentation Model

import { Schema, model } from "mongoose";

const FermentationSchema = new Schema({
  fermentationDescription: {
    type: String,
    trim: true,
    required: true,
  },
  fermentationTemperature: {
    type: Number,
    required: true,
  },
  fermentationStartTime: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
  fermentationEndTime: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
  fermentationElapsedTime: {
    type: Number,
  },
  fermentationNotificationTime: {
    type: Number,
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
