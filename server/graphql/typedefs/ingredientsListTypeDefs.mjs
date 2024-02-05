// Ingredients List Type Definitions

import { gql } from "apollo-server-express";

export const ingredientsListTypeDefs = gql`
  type IngredientsList {
    id: ID!
    name: String!
    malt: [Malt]
    water: [Water]
    hops: [Hops]
    yeast: [Yeast]
    additives: [Additives]
    lastmodified: String
  }

  type Query {
    getAllIngredientsList: [IngredientsList]
    getIngredients(id: ID!): IngredientsList
  }

  type Mutation {
    # these are for admin use and should NOT be used in the client
    addIngredientsList(name: String!): IngredientsList
    addToIngredientsList(
      malt: [ID!]!
      water: [ID!]!
      hops: [ID!]!
      yeast: [ID!]!
      additives: [ID!]!
    ): IngredientsList
  }
`;
