// Cooling Model

import { Schema, model } from "mongoose";

const CoolingSchema = new Schema({
  coolingDescription: {
    type: String,
    required: true,
    trim: true,
  },
  coolingTemperature: {
    type: Number,
    required: true,
  },
  coolingStartTime: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
  coolingEndTime: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
  coolingElapsedTime: {
    type: Number,
  },
  coolingNotificationTime: {
    type: Number,
  },
  hops: {
    type: Schema.Types.ObjectId,
    ref: "Hops",
  },
  additives: {
    type: Schema.Types.ObjectId,
    ref: "Additives",
  },
});

const CoolingModel = model("Cooling", CoolingSchema);

export default CoolingModel;
