// Clarification Step Model

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
  },
  clarificationEndTime: {
    type: Date,
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
