// Ingredients List Type Definitions

import { gql } from "apollo-server-express";

export const ingredientsTypeDefs = gql`
  type Ingredients {
    malt: Malt
    water: Water
    hops: Hops
    yeast: Yeast
    additives: Additives
    lastmodified: String
  }
  type Query {
    getAllIngredients: [Ingredients]
    getIngredientsById(ingredientsId: ID!): Ingredients
  }
  type Mutation {
    addToIngredientsList(
      malt: ID!
      water: ID!
      hops: ID!
      yeast: ID!
      additives: ID!
    ): Ingredients
  }
`;
