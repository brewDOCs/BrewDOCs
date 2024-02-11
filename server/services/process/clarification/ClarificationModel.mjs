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

// Calculates elapsed time in seconds using mongoose pre-save middleware, NOTE: does not run on update() or findOneandUpdate()
// 'this' refers to the document about to be saved
ClarificationSchema.pre("save", function (next) {
  if (this.clarificationStartTime && this.clarificationEndTime) {
    this.clarificationElapsedTime =
      (this.clarificationEndTime - this.clarificationStartTime) / 1000; // in seconds
  }
  next();
});

const ClarificationModel = model("Clarification", ClarificationSchema);

export default ClarificationModel;
