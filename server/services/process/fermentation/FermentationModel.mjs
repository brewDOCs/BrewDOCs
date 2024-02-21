// Fermentation Step Model

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
  },
  fermentationEndTime: {
    type: Date,
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
