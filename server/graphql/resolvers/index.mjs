// index for all GraphQL resolvers

import { userResolvers } from "./userResolvers.mjs";
import { beerMasterResolvers } from "./beerMasterResolvers.mjs";
import { ingredientsResolvers } from "./ingredientsResolvers.mjs";
import { hopsResolvers } from "./hopsResolvers.mjs";
import { maltResolvers } from "./maltResolvers.mjs";
import { yeastResolvers } from "./yeastResolvers.mjs";
import { additivesResolvers } from "./additivesResolvers.mjs";
import { waterResolvers } from "./waterResolvers.mjs";
import { processResolvers } from "./processResolvers.mjs";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...beerMasterResolvers.Query,
    ...ingredientsResolvers.Query,
    ...hopsResolvers.Query,
    ...maltResolvers.Query,
    ...yeastResolvers.Query,
    ...additivesResolvers.Query,
    ...waterResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...beerMasterResolvers.Mutation,
    ...ingredientsResolvers.Mutation,
    ...hopsResolvers.Mutation,
    ...maltResolvers.Mutation,
    ...yeastResolvers.Mutation,
    ...additivesResolvers.Mutation,
    ...waterResolvers.Mutation,
  },
};