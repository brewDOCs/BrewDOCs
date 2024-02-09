// Clarification Model

import { Schema, model } from "mongoose";

const ClarificationSchema = new Schema({
  clarificationDescription: {
    type: String,
    trim: true,
  },
  clarificationTemperature: {
    type: Number,
  },
  clarificationStartTime: {
    type: Date,
    default: Date.now,
  },
  clarificationEndTime: {
    type: Date,
    default: Date.now,
  },
  additives: {
    type: Schema.Types.ObjectId,
    ref: "Additives",
  },
});

const ClarificationModel = model("Clarification", ClarificationSchema);

export default ClarificationModel;
