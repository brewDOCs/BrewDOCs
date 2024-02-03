// Additives Model

import { Schema, model } from "mongoose";

const AdditivesSchema = new Schema({
  additiveName: {
    type: String,
    required: true,
    trim: true,
  },
  additiveAmount: {
    type: Number,
  },
});

const Additives = model("Additives", AdditivesSchema);

export default Additives;
