// Malt Model

import { Schema, model } from "mongoose";

const MaltSchema = new Schema({
  maltName: {
    type: String,
    required: true,
    trim: true,
  },
  maltAmount: {
    type: Number,
  },
});

const Malt = model("Malt", MaltSchema);

export default Malt;
