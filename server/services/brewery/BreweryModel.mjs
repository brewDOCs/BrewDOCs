// Brewery Model

import { Schema, model } from "mongoose";

const brewerySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  beerMasters: [
    {
      type: Schema.Types.ObjectId,
      ref: "BeerMaster",
    },
  ],
  assignedEmployees: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  employeeLink: {
    type: String,
    trim: true,
  },
});

const BreweryModel = model("Brewery", brewerySchema);

export default BreweryModel;
