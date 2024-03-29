// Brewery Resolvers

import BreweryModel from "./BreweryModel.mjs";
import UserModel from "../user/UserModel.mjs";

export const breweryResolvers = {
  Query: {
    // get all breweries by userId
    getAllBreweriesByUserId: async (_, { userId }) => {
      const user = await UserModel.findById(userId)
        .populate("breweries")
        .populate("breweries.admins")
        .populate("breweries.beerMasters")
        .populate("breweries.assignedEmployees");
      return user.breweries;
    },
    // get one brewery by breweryId
    getOneBreweryById: async (_, { breweryId }) => {
      const brewery = await BreweryModel.findById(breweryId)
        .populate("beerMasters")
        .populate("admins")
        .populate("assignedEmployees");
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
      brewery.admins.push(user);
      await brewery.save();
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
    // add user to brewery's admins array and add brewery to user's breweries array and add all brewery's employees to user's employees array
    addAdminToBrewery: async (_, { breweryId, userId }) => {
      const brewery = await BreweryModel.findById(breweryId);
      const user = await UserModel.findById(userId);
      const adminPromise = brewery.assignedEmployees.map(async (_Id) => {
        const employee = await UserModel.findById(_Id);
        user.employees.push(employee);
        await user.save();
      });
      brewery.admins.push(user);
      await brewery.save();
      user.breweries.push(brewery);
      user.userType = "admin";
      await user.save();
      await Promise.all(adminPromise);
      return user;
    },
    // add user to brewery's employees array and add user to admin user's employees array
    addEmployeeToBrewery: async (_, { breweryId, userId }) => {
      const brewery = await BreweryModel.findById(breweryId);
      const user = await UserModel.findById(userId);
      const adminPromise = brewery.admins.map(async (_Id) => {
        const admin = await UserModel.findById(_Id);
        admin.employees.push(user);
        await admin.save();
      });
      brewery.assignedEmployees.push(user);
      await brewery.save();
      user.breweries.push(brewery);
      await user.save();
      await Promise.all(adminPromise);
      return user;
    },
    // remove Admin from brewery's admins array and remove brewery from user's breweries array and remove all brewery's employees from user's employees array
    removeAdminFromBrewery: async (_, { breweryId, userId }) => {
      const brewery = await BreweryModel.findById(breweryId);
      const user = await UserModel.findById(userId);
      const employeePromise = brewery.assignedEmployees.map(async (_Id) => {
        const employee = await UserModel.findById(_Id);
        user.employees.pull(employee);
        await user.save();
      });
      brewery.admins.pull(user);
      await brewery.save();
      user.breweries.pull(brewery);
      await user.save();
      await Promise.all(employeePromise);
      return user;
    },
    // remove Employee from brewery's assignedEmployees array and remove brewery from user's breweries array
    removeEmployeeFromBrewery: async (_, { breweryId, userId }) => {
      const brewery = await BreweryModel.findById(breweryId);
      const user = await UserModel.findById(userId);
      const adminPromise = brewery.admins.map(async (_Id) => {
        const admin = await UserModel.findById(_Id);
        admin.employees.pull(user);
        await admin.save();
      });
      brewery.assignedEmployees.pull(user);
      await brewery.save();
      user.breweries.pull(brewery);
      await user.save();
      await Promise.all(adminPromise);
      return user;
    },
    // remove Brewery by breweryId and remove from user's breweries array
    removeBreweryByUserId: async (_, { breweryId, userId }) => {
      const brewery = await BreweryModel.findByIdAndDelete(breweryId);
      const user = await UserModel.findById(userId);
      user.breweries.pull(brewery);
      await user.save();
      brewery.admins.pull(user);
      await brewery.save();
      return brewery;
    },
  },
};
