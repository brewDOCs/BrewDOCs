// Yeast Model

import { Schema, model } from "mongoose";

const YeastSchema = new Schema({
  yeastName: {
    type: String,
    required: true,
    trim: true,
  },
  yeastAmount: {
    type: Number,
  },
});

const Yeast = model("Yeast", YeastSchema);

export default Yeast;
