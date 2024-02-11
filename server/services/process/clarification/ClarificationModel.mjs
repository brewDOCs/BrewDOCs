// Clarification Model

import { Schema, model } from "mongoose";

const ClarificationSchema = new Schema({
  clarificationDescription: {
    type: String,
    required: true,
    trim: true,
  },
  clarificationTemperature: {
    type: Number,
    required: true,
  },
  clarificationStartTime: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
  clarificationEndTime: {
    type: Date,
    default: Date.now,
    get: (date) => {
      return date.toISOString();
    },
  },
  clarificationElapsedTime: {
    type: Number,
  },
  clarificationNotificationTime: {
    type: Number,
  },
  additives: [
    {
      type: Schema.Types.ObjectId,
      ref: "Additives",
    },
  ],
});

const ClarificationModel = model("Clarification", ClarificationSchema);

export default ClarificationModel;
