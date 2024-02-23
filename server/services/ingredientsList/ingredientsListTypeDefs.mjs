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
    getAllIngredientsListsByBrewRunId(brewRunId: ID!): [IngredientsList]
    getOneIngredientsListById(ingredientsListId: ID!): IngredientsList
  }
  type Mutation {
    createIngredientsList(brewRunId: ID!): IngredientsList
    removeIngredientsList(ingredientListId: ID!, brewRunId: ID!): IngredientsList
    updateIngredientsList(ingredientListId: ID!, brewRunId: ID!): IngredientsList
  }
`;
