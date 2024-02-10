// Yeast Model

import { Schema, model } from "mongoose";

const YeastSchema = new Schema({
  yeastName: {
    type: String,
    required: true,
    trim: true,
  },
  strainType: {
    type: String,
    required: true,
    trim: true,
  },
  strainSubType: {
    type: String,
    trim: true,
  },
  attenuation: {
    type: Number,
  },
  flocculation: {
    type: String,
    trim: true,
  },
  yeastAmount: {
    type: Number,
  },
});

const YeastModel = model("Yeast", YeastSchema);

export default YeastModel;
