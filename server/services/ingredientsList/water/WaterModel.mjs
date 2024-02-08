// Water Model

import { Schema, model } from "mongoose";

const WaterSchema = new Schema({
  waterAlkalinity: {
    type: Number,
    required: true,
    trim: true,
  },
  waterAmount: {
    type: Number,
  },
});

const WaterModel = model("Water", WaterSchema);

export default WaterModel;
