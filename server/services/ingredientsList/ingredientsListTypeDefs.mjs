// Ingredients List Type Definitions

import { gql } from "apollo-server-express";

export const ingredientsListTypeDefs = gql`
  type IngredientsList {
    _id: ID!
    malt: [Malt]
    water: [Water]
    hops: [Hops]
    yeast: [Yeast]
    additives: [Additives]
    lastmodified: String
  }

  type Query {
    getAllIngredientsListByBeerMasterID(beerMasterId: ID!): [IngredientsList]
    getOneIngredientsListByBeerMasterId(
      beerMasterId: ID!
      ingredientsListId: ID!
    ): [IngredientsList]
  }

  type Mutation {
    createIngredientsList(beerMasterId: ID!): IngredientsList
    removeIngredientsList(id: ID!, beerMasterId: ID!): IngredientsList
    updateIngredientsList(id: ID!, beerMasterId: ID!): IngredientsList
  }
`;
