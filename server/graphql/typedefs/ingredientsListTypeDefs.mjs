// Ingredients List Type Definitions

import { gql } from "apollo-server-express";

export const ingredientsListTypeDefs = gql`
  type Ingredients {
    id: ID!
    malt: [Malt]
    water: [Water]
    hops: [Hops]
    yeast: [Yeast]
    additives: [Additives]
    lastmodified: String
  }

  type Query {
    getIngredients(id: ID!): Ingredients
    getAllIngredients: [Ingredients]
  }

  type Mutation {
    addToIngredientsList(
      malt: [ID!]!
      water: [ID!]!
      hops: [ID!]!
      yeast: [ID!]!
      additives: [ID!]!
    ): Ingredients
  }
`;
