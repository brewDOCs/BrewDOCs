// Lautering Model

import { Schema, model } from "mongoose";

const LauteringSchema = new Schema({
  lauteringDescription: {
    type: String,
    required: true,
    trim: true,
  },
  lauteringTemperature: {
    type: Number,
    required: true,
  },
  lauteringStartTime: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
  lauteringEndTime: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
  lauteringElapsedTime: {
    type: Number,
  },
  lauteringNotificationTime: {
    type: Number,
  },
});

const LauteringModel = model("Lautering", LauteringSchema);

export default LauteringModel;
