// User Model

import { Schema, model } from "mongoose";
// import bcrypt from "bcrypt";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: "Please enter a username!",
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: "Please enter an email address!",
    match: [/.+@.+\..+/],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  beerMasters: [
    {
      type: Schema.Types.ObjectId,
      ref: "BeerMaster",
    },
  ],
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = model("User", userSchema);

export default User;
