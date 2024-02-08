// Hops Model

import { Schema, model } from "mongoose";

const HopsSchema = new Schema({
  hopsName: {
    type: String,
    required: true,
    trim: true,
  },
  hopsAmount: {
    type: Number,
  },
});

const HopsModel = model("Hops", HopsSchema);

export default HopsModel;
