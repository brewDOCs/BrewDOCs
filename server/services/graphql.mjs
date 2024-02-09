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
import { mashingTypeDefs } from "./process/mashing/mashingTypeDefs.mjs";
import { wortTypeDefs } from "./process/wort/wortTypeDefs.mjs";
import { fermentationTypeDefs } from "./process/fermentation/fermentationTypeDefs.mjs";
import { conditioningTypeDefs } from "./process/conditioning/conditioningTypeDefs.mjs";
import { coolingTypeDefs } from "./process/cooling/coolingTypeDefs.mjs";
import { clarificationTypeDefs } from "./process/clarification/clarificationTypeDefs.mjs";
import { lauteringTypeDefs } from "./process/lautering/lauteringTypeDefs.mjs";

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
import { mashingResolvers } from "./process/mashing/mashingResolvers.mjs";
import { wortResolvers } from "./process/wort/wortResolvers.mjs";
import { fermentationResolvers } from "./process/fermentation/fermentationResolvers.mjs";
import { conditioningResolvers } from "./process/conditioning/conditioningResolvers.mjs";
import { coolingResolvers } from "./process/cooling/coolingResolvers.mjs";
import { clarificationResolvers } from "./process/clarification/clarificationResolvers.mjs";
import { lauteringResolvers } from "./process/lautering/lauteringResolvers.mjs";

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
  mashingTypeDefs,
  wortTypeDefs,
  fermentationTypeDefs,
  conditioningTypeDefs,
  coolingTypeDefs,
  clarificationTypeDefs,
  lauteringTypeDefs,
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
    ...mashingResolvers.Query,
    ...wortResolvers.Query,
    ...fermentationResolvers.Query,
    ...conditioningResolvers.Query,
    ...coolingResolvers.Query,
    ...clarificationResolvers.Query,
    ...lauteringResolvers.Query,
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
    ...mashingResolvers.Mutation,
    ...wortResolvers.Mutation,
    ...fermentationResolvers.Mutation,
    ...conditioningResolvers.Mutation,
    ...coolingResolvers.Mutation,
    ...clarificationResolvers.Mutation,
    ...lauteringResolvers.Mutation,
  },
};
