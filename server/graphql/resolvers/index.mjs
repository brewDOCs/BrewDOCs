// index for all GraphQL resolvers

import { userResolvers } from "./userResolvers.mjs";
import { beerMasterResolvers } from "./beerMasterResolvers.mjs";
import { ingredientsResolvers } from "./ingredientsResolvers.mjs";
import { processResolvers } from "./processResolvers.mjs";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...beerMasterResolvers.Query,
    ...ingredientsResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...beerMasterResolvers.Mutation,
    ...ingredientsResolvers.Mutation,
  },
};