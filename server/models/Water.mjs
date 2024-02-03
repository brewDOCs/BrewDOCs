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

const Water = model("Water", WaterSchema);

export default Water;
