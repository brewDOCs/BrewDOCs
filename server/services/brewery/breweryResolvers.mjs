// Brewery Resolvers

import BreweryModel from "./BreweryModel.mjs";
import UserModel from "../user/UserModel.mjs";

export const breweryResolvers = {
  Query: {
    // get all breweries by userId
    getAllBreweriesByUserId: async (_, { userId }) => {
      const user = await UserModel.findById(userId)
        .populate("breweries")
        .populate("breweries.assignedEmployees");
      return user.breweries;
    },
    // get one brewery by breweryId
    getOneBreweryById: async (_, { breweryId }) => {
      const brewery = await BreweryModel.findById(breweryId).populate("assignedEmployees");
      return brewery;
    },
  },
  Mutation: {
    // create Brewery and add it to user's breweries array
    createBreweryByUserId: async (_, { name, location, employeeLink, userId }) => {
      const brewery = await BreweryModel.create({ name, location, employeeLink });
      const user = await UserModel.findById(userId);
      user.breweries.push(brewery);
      await user.save();
      return brewery;
    },
    // update Brewery by breweryId
    updateBrewery: async (_, { breweryId, name, location, employeeLink }) => {
      const brewery = await BreweryModel.findByIdAndUpdate(
        breweryId,
        { name, location, employeeLink },
        { new: true },
      );
      return brewery;
    },
    // remove Brewery by breweryId and remove from user's breweries array
    removeBreweryByUserId: async (_, { breweryId, userId }) => {
      const brewery = await BreweryModel.findByIdAndDelete(breweryId);
      const user = await UserModel.findById(userId);
      user.breweries.pull(brewery);
      await user.save();
      return brewery;
    },
  },
};

export default breweryResolvers;
