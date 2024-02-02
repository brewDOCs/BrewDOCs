// index for all GraphQL resolvers

import { userResolvers } from "./userResolvers.mjs";
import { ingredientsResolvers } from "./ingredientsResolvers.mjs";
import { processResolvers } from "./processResolvers.mjs";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...ingredientsResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...ingredientsResolvers.Mutation,
  },
};