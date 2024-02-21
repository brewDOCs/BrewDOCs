// Cooling Step Model

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
  },
  coolingEndTime: {
    type: Date,
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
