// GraphQL Type Definitions
import { userTypeDefs } from "./user/userTypeDefs.mjs";
import { beerMasterTypeDefs } from "./beerMaster/beerMasterTypeDefs.mjs";
import { ingredientsListTypeDefs } from "./ingredientsList/ingredientsListTypeDefs.mjs";
import { hopsTypeDefs } from "./ingredientsList/hops/hopsTypeDefs.mjs";
import { maltTypeDefs } from "./ingredientsList/malt/maltTypeDefs.mjs";
import { yeastTypeDefs } from "./ingredientsList/yeast/yeastTypeDefs.mjs";
import { additivesTypeDefs } from "./ingredientsList/additives/additivesTypeDefs.mjs";
import { waterTypeDefs } from "./ingredientsList/water/waterTypeDefs.mjs";
import { processTypeDefs } from "./process/processTypeDefs.mjs";

// GraphQL Resolvers
import { userResolvers } from "./user/userResolvers.mjs";
import { beerMasterResolvers } from "./beerMaster/beerMasterResolvers.mjs";
import { ingredientsListResolvers } from "./ingredientsList/ingredientsListResolvers.mjs";
import { hopsResolvers } from "./ingredientsList/hops/hopsResolvers.mjs";
import { maltResolvers } from "./ingredientsList/malt/maltResolvers.mjs";
import { yeastResolvers } from "./ingredientsList/yeast/yeastResolvers.mjs";
import { additivesResolvers } from "./ingredientsList/additives/additivesResolvers.mjs";
import { waterResolvers } from "./ingredientsList/water/waterResolvers.mjs";
import { processResolvers } from "./process/processResolvers.mjs";

export const typeDefs = [
  userTypeDefs,
  beerMasterTypeDefs,
  ingredientsListTypeDefs,
  hopsTypeDefs,
  maltTypeDefs,
  yeastTypeDefs,
  additivesTypeDefs,
  waterTypeDefs,
  processTypeDefs,
];

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...beerMasterResolvers.Query,
    ...ingredientsListResolvers.Query,
    ...hopsResolvers.Query,
    ...maltResolvers.Query,
    ...yeastResolvers.Query,
    ...additivesResolvers.Query,
    ...waterResolvers.Query,
    ...processResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...beerMasterResolvers.Mutation,
    ...ingredientsListResolvers.Mutation,
    ...hopsResolvers.Mutation,
    ...maltResolvers.Mutation,
    ...yeastResolvers.Mutation,
    ...additivesResolvers.Mutation,
    ...waterResolvers.Mutation,
    ...processResolvers.Mutation,
  },
};
