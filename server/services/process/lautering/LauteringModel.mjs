// Lautering Model

import { Schema, model } from "mongoose";

const LauteringSchema = new Schema({
  description: {
    type: String,
    trim: true,
  },
  temperature: {
    type: Number,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
    default: Date.now,
  },
});

const LauteringModel = model("Lautering", LauteringSchema);

export default LauteringModel;
