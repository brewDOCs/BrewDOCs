// BeerMaster Resolvers

import BeerMaster from "../../models/BeerMaster.mjs";
import User from "../../models/User.mjs";

export const beerMasterResolvers = {
  Query: {
    // these are for admin use and should NOT be used in the client
    getBeerMasters: async () => {
      return await BeerMaster.find({});
    },
    getBeerMasterById: async (_, { id }) => {
      return await BeerMaster.findById(id);
    },
    // these are for user use and should be used in the client
    getAllBeerMastersByUserId: async (_, { userId }) => {
      const user = await User.findById(userId).populate("beerMasters");
      return user.beerMasters;
    },
    getOneBeerMasterByUserId: async (_, { userId, beerMasterId }) => {
      const user = await User.findById(userId).populate("beerMasters");
      return user.beerMasters.filter(
        (beerMaster) => beerMaster._id.toString() === beerMasterId
      );
    },
  },
  Mutation: {
    // these are for admin use and should NOT be used in the client
    addBeerMaster: async (_, { name, type }) => {
      const beerMaster = await BeerMaster.create({ name, type });
      return beerMaster;
    },
    removeBeerMaster: async (_, { id }) => {
      const beerMaster = await BeerMaster.findByIdAndDelete(id);
      return beerMaster;
    },
    // these are for user use and should be used in the client
    createBeerMaster: async (_, { name, type, userId }) => {
      const beerMaster = await BeerMaster.create({ name, type });
      const user = await User.findById(userId);
      user.beerMasters.push(beerMaster);
      await user.save();
      return beerMaster;
    },
    // delete BeerMaster by user and remove from user
    deleteBeerMaster: async (_, { id, userId }) => {
      const beerMaster = await BeerMaster.findByIdAndDelete(id);
      const user = await User.findById(userId);
      user.beerMasters.pull(beerMaster);
      await user.save();
      return beerMaster;
    },
    // update BeerMaster by user
    updateBeerMaster: async (
      _,
      { id, userId, name, type, abv, ibu, image }
    ) => {
      const beerMaster = await BeerMaster.findByIdAndUpdate(
        id,
        { name, type, abv, ibu, image },
        { new: true }
      );
      return beerMaster;
    },
  },
};
