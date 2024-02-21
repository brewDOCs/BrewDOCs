// Mashing Step Model

import { Schema, model } from "mongoose";

const MashingSchema = new Schema({
  mashingDescription: {
    type: String,
    trim: true,
  },
  mashingTemperature: {
    type: Number,
  },
  mashingStartTime: {
    type: Date,
    default: Date.now,
  },
  mashingEndTime: {
    type: Date,
    default: Date.now,
  },
  mashingElapsedTime: {
    type: Number,
  },
  mashingNotificationTime: {
    type: Number,
  },
  malt: {
    type: Schema.Types.ObjectId,
    ref: "Malt",
  },
  water: {
    type: Schema.Types.ObjectId,
    ref: "Water",
  },
  additives: {
    type: Schema.Types.ObjectId,
    ref: "Additives",
  },
});

const MashingModel = model("Mashing", MashingSchema);

export default MashingModel;
