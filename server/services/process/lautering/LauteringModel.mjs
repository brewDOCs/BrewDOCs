// Lautering Step Model

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
  },
  lauteringEndTime: {
    type: Date,
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
