// Conditioning Step Model

import { Schema, model } from "mongoose";

const ConditioningSchema = new Schema({
  conditioningDescription: {
    type: String,
    trim: true,
  },
  conditioningTemperature: {
    type: Number,
  },
  conditioningStartTime: {
    type: Date,
    default: Date.now,
  },
  conditioningEndTime: {
    type: Date,
    default: Date.now,
  },
  conditioningElapsedTime: {
    type: Number,
  },
  conditioningNotificationTime: {
    type: Number,
  },
});

const ConditioningModel = model("Conditioning", ConditioningSchema);

export default ConditioningModel;
