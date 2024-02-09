// Malt Model

import { Schema, model } from "mongoose";

const MaltSchema = new Schema({
  maltName: {
    type: String,
    required: true,
    trim: true,
  },
  lovibond: {
    type: Number,
  },
  ppg: {
    type: Number,
  },
  dp: {
    type: Number,
  },
  maltAmount: {
    type: Number,
  },
});

const MaltModel = model("Malt", MaltSchema);

export default MaltModel;
