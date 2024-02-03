import { Schema, model } from "mongoose";

const beerMasterSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  abv: {
    type: Number,
    trim: true,
  },
  ibu: {
    type: Number,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
});

const BeerMaster = model("BeerMaster", beerMasterSchema);

export default BeerMaster;
