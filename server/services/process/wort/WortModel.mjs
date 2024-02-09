// Wort Model

import { Schema, model } from "mongoose";

const WortSchema = new Schema({
  wortDescription: {
    type: String,
    trim: true,
  },
  wortTemperature: {
    type: Number,
  },
  wortStartTime: {
    type: Date,
    default: Date.now,
  },
  wortEndTime: {
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

const WortModel = model("Wort", WortSchema);

export default WortModel;
