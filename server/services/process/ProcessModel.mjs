// Process Model

import { Schema, model } from "mongoose";

const ProcessSchema = new Schema({
  mashing: [
    {
      type: Schema.Types.ObjectId,
      ref: "Mashing",
    },
  ],
  lautering: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lautering",
    },
  ],
  wort: [
    {
      type: Schema.Types.ObjectId,
      ref: "Wort",
    },
  ],
  clarification: [
    {
      type: Schema.Types.ObjectId,
      ref: "Clarification",
    },
  ],
  cooling: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cooling",
    },
  ],
  fermentation: [
    {
      type: Schema.Types.ObjectId,
      ref: "Fermentation",
    },
  ],
  conditioning: [
    {
      type: Schema.Types.ObjectId,
      ref: "Conditioning",
    },
  ],
  lastModified: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
});

const ProcessModel = model("Process", ProcessSchema);

export default ProcessModel;
