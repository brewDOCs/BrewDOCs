// Cooling Model

import { Schema, model } from "mongoose";

const CoolingSchema = new Schema({
  coolingDescription: {
    type: String,
    trim: true,
  },
  coolingTemperature: {
    type: Number,
  },
  coolingStartTime: {
    type: Date,
    default: Date.now,
  },
  coolingEndTime: {
    type: Date,
    default: Date.now,
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
