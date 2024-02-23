// BrewRun Type Definitions

import { gql } from "apollo-server-express";

export const brewRunTypeDefs = gql`
  type BrewRun {
    _id: ID!
    status: String!
    ingredientsList: [IngredientsList]!
    process: [Process]!
  }
  type Query {
    getAllBrewRunsByBeerMasterId(beerMasterId: ID!): [BrewRun]
    getOneBrewRunById(brewRunId: ID!): BrewRun
  }
  type Mutation {
    createBrewRun(beerMasterId: ID!): BrewRun
    removeBrewRun(brewRunId: ID!, beerMasterId: ID!): BrewRun
    updateBrewRun(brewRunId: ID!): BrewRun
  }
`;
