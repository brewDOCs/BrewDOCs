// BeerMaster Resolvers

import BeerMasterModel from "./BeerMasterModel.mjs";
import UserModel from "../user/UserModel.mjs";

export const beerMasterResolvers = {
  Query: {
    // get all beerMasters by userId
    getAllBeerMastersByUserId: async (_, { userId }) => {
      const user = await UserModel.findById(userId).populate("beerMasters");
      return user.beerMasters;
    },
    getOneBeerMasterById: async (_, { beerMasterId }) => {
      const beerMaster = await BeerMasterModel.findById(beerMasterId);
      return beerMaster;
    },
  },
  Mutation: {
    // create BeerMaster and add it to user's beerMasters array
    createBeerMasterByUserID: async (_, { name, type, userId }) => {
      const beerMaster = await BeerMasterModel.create({ name, type });
      const user = await UserModel.findById(userId);
      user.beerMasters.push(beerMaster);
      await user.save();
      return beerMaster;
    },
    // update BeerMaster by beerMasterId
    updateBeerMaster: async (_, { beerMasterId, name, type, description, abv, ibu, image }) => {
      const beerMaster = await BeerMasterModel.findByIdAndUpdate(
        beerMasterId,
        { name, description, type, abv, ibu, image },
        { new: true },
      );
      return beerMaster;
    },
    // remove BeerMaster by beerMasterId and remove from user's beerMasters array
    removeBeerMasterByUserID: async (_, { beerMasterId, userId }) => {
      const beerMaster = await BeerMasterModel.findByIdAndDelete(beerMasterId);
      const user = await UserModel.findById(userId);
      user.beerMasters.pull(beerMaster);
      await user.save();
      return beerMaster;
    },
  },
};
