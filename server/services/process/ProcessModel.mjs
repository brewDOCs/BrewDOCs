// Process Model

import { Schema, model } from "mongoose";

const processSchema = new Schema({});

const ProcessModel = model("Process", processSchema);

export default ProcessModel;
