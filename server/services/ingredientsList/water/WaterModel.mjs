// Water Model

import { Schema, model } from "mongoose";

const WaterSchema = new Schema({
  waterAlkalinity: {
    type: Number,
    required: true,
    trim: true,
  },
  waterCalcium: {
    type: Number,
  },
  waterMagnesium: {
    type: Number,
  },
  waterSodium: {
    type: Number,
  },
  waterSulfate: {
    type: Number,
  },
  waterChloride: {
    type: Number,
  },
  waterAmount: {
    type: Number,
  },
});

const WaterModel = model("Water", WaterSchema);

export default WaterModel;
