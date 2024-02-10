// BeerMaster Resolvers

import BeerMasterModel from "./BeerMasterModel.mjs";
import UserModel from "../user/UserModel.mjs";

export const beerMasterResolvers = {
  Query: {
    // get all beerMasters by userId
    retrieveAllBeerMastersByUserId: async (_, { userId }) => {
      const user = await UserModel.findById(userId).populate("beerMasters");
      return user.beerMasters;
    },
    // get one beerMaster by userId and beerMasterId
    retrieveOneBeerMasterByUserId: async (_, { userId, beerMasterId }) => {
      const user = await UserModel.findById(userId).populate("beerMasters");
      return user.beerMasters.filter(
        (beerMaster) => beerMaster._id.toString() === beerMasterId,
      );
    },
  },

  Mutation: {
    // create BeerMaster by userId
    createBeerMasterByUserID: async (_, { name, type, userId }) => {
      const beerMaster = await BeerMasterModel.create({ name, type });
      const user = await UserModel.findById(userId);
      user.beerMasters.push(beerMaster);
      await user.save();
      return beerMaster;
    },
    // update BeerMaster by beerMasterId
    updateBeerMaster: async (
      _,
      { id, userId, name, type, abv, ibu, image },
    ) => {
      const beerMaster = await BeerMasterModel.findByIdAndUpdate(
        id,
        { name, type, abv, ibu, image },
        { new: true },
      );
      return beerMaster;
    },
    // remove BeerMaster by beerMasterId and remove from user's beerMasters array
    removeBeerMasterByUserID: async (_, { id, userId }) => {
      const beerMaster = await BeerMasterModel.findByIdAndDelete(id);
      const user = await UserModel.findById(userId);
      user.beerMasters.pull(beerMaster);
      await user.save();
      return beerMaster;
    },
  },
};
