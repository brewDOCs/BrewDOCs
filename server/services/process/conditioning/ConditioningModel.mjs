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
  },
  conditioningEndTime: {
    type: Date,
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
