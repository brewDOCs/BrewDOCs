// Conditioning Model

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
    get: (date) => {
      return date.toISOString();
    },
  },
  conditioningEndTime: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
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
