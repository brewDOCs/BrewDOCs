// User Resolvers

import UserModel from "./UserModel.mjs";
import BreweryModel from "../brewery/BreweryModel.mjs";
import { generateToken } from "../../utils/SecretToken.mjs";

export const userResolvers = {
  Query: {
    getUsers: async () => {
      return await UserModel.find({});
    },
    getOneUser: async (_, { _id }) => {
      const user = await UserModel.findById(_id).populate("breweries").populate("employees");
      return user;
    },
    getAllEmployeesByBreweryId: async (_, { breweryId }) => {
      const brewery = await BreweryModel.findById(breweryId).populate("assignedEmployees");
      return brewery.assignedEmployees;
    },
  },
  Mutation: {
    // login user and set token as a cookie
    login: async (_, { username, password }, { res }) => {
      const user = await UserModel.findOne({ username });
      if (!user) {
        throw new Error("No user with that username found!");
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        throw new Error("Invalid password!");
      }
      // pull username and _id from user object and set them into the token
      const payload = { username: user.username, _id: user._id };
      const token = generateToken(payload);
      res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
      return payload; // Return only username and _id if needed
    },
    // signup user and set token as a cookie pulling the payload from the newly created user and setting it into the token
    signup: async (_, { username, email, password }, { res }) => {
      const user = await UserModel.create({ username, email, password });
      const payload = { username: user.username, _id: user._id };
      const token = generateToken(payload);
      res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
      return payload; // Return only username and _id if needed
    },
    // signup employee and set token as a cookie pulling the payload from the newly created user and setting it into the token
    // add employee to brewery's assignedEmployees array and add brewery to user's breweries array
    // add employee to all brewery's admin users' employees array
    signupEmployee: async (_, { username, email, password, userType, breweryId }) => {
      const user = await UserModel.create({ username, email, password, userType });
      const brewery = await BreweryModel.findById(breweryId);
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
      const payload = {
        username: user.username,
        _id: user._id,
        userType: user.userType,
        breweryId: brewery._id,
      };
      const token = generateToken(payload);
      res.cookie("token", token, { httpOnly: true }); // Set token as a cookie
      return payload; // Return only username and _id if needed
    },
    // update user by _id
    updateUser: async (_, { _id, username, email, password }) => {
      const user = await UserModel.findByIdAndUpdate(
        _id,
        { username, email, password },
        { new: true },
      );
      return user;
    },
    // logout user and clear token
    logout: async (_, __, { res }) => {
      res.clearCookie("token"); // Clear token
      return "Logged out!";
    },
    // remove employee from brewery's assignedEmployees array
    removeEmployeeByBreweryId: async (_, { _id, breweryId }) => {
      const user = await UserModel.findByIdAndDelete(_id);
      const brewery = await BreweryModel.findById(breweryId);
      brewery.assignedEmployees.pull(user);
      await brewery.save();
      return user;
    },
    // delete user and remove from all associated breweries and admin users' employees array
    deleteUser: async (_, { _id }) => {
      const user = await UserModel.findByIdAndDelete(_id);
      const breweries = await BreweryModel.find({ assignedEmployees: _id });
      for (let brewery of breweries) {
        brewery.assignedEmployees.pull(user);
        await brewery.save();
        const adminPromise = brewery.admins.map(async (_Id) => {
          const admin = await UserModel.findById(_Id);
          admin.employees.pull(user);
          await admin.save();
        });
        await Promise.all(adminPromise);
      }
      return user;
    },
  },
};
