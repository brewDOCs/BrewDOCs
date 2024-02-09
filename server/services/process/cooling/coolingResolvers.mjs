// Cooling Resolvers

import CoolingModel from "./CoolingModel.mjs";
import BeerMasterModel from "../../beerMaster/BeerMasterModel.mjs";

export const coolingResolvers = {
  Query: {
    getAllCooling: async () => {
      return await CoolingModel.find({});
    },
    getCoolingById: async (_, { id }) => {
      return await CoolingModel.findById(id);
    },
    getAllCoolingByBeerMasterId: async (_, { beerMasterId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("cooling");
      return beerMaster.cooling;
    },
    getOneCoolingByBeerMasterId: async (_, { beerMasterId, coolingId }) => {
      const beerMaster =
        await BeerMasterModel.findById(beerMasterId).populate("cooling");
      return beerMaster.cooling.filter(
        (cooling) => cooling._id.toString() === coolingId,
      );
    },
  },
  Mutation: {
    addCooling: async (
      _,
      {
        coolingDescription,
        coolingTemperature,
        coolingStartTime,
        coolingEndTime,
      },
    ) => {
      const cooling = await CoolingModel.create({
        coolingDescription,
        coolingTemperature,
        coolingStartTime,
        coolingEndTime,
      });
      return cooling;
    },
  },
};
