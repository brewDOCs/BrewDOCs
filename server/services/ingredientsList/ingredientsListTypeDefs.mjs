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
    # these are for admin use and should NOT be used in the client
    getAllIngredientsList: [IngredientsList]
    getIngredients(id: ID!): IngredientsList
    # these are for client use and should be used in the client
    getAllIngredientsListByBeerMasterID(beerMasterId: ID!): [IngredientsList]
    getOneIngredientsListByBeerMasterId(
      beerMasterId: ID!
      ingredientsListId: ID!
    ): [IngredientsList]
  }

  type Mutation {
    # these are for admin use and should NOT be used in the client
    addIngredientsList: IngredientsList
    # these are for client use and should be used in the client
    createIngredientsList(beerMasterId: ID!): IngredientsList
    removeIngredientsList(id: ID!, beerMasterId: ID!): IngredientsList
    updateIngredientsList(id: ID!, beerMasterId: ID!): IngredientsList
  }
`;
