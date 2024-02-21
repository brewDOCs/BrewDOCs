// Wort Step Model

import { Schema, model } from "mongoose";

const WortSchema = new Schema({
  wortDescription: {
    type: String,
    required: true,
    trim: true,
  },
  wortTemperature: {
    type: Number,
    required: true,
  },
  wortStartTime: {
    type: Date,
  },
  wortEndTime: {
    type: Date,
  },
  wortElapsedTime: {
    type: Number,
  },
  wortNotificationTime: {
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

const WortModel = model("Wort", WortSchema);

export default WortModel;
