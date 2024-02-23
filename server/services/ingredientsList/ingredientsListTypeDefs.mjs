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

  input IngredientsListInput {
    ingredientListId: ID!
    beerMasterId: ID!
  }

  type Query {
    getAllIngredientsListByBeerMasterId(beerMasterId: ID!): [IngredientsList]
    getOneIngredientsListById(ingredientsListId: ID!): IngredientsList
  }

  type Mutation {
    createIngredientsList(beerMasterId: ID!): IngredientsList
    removeIngredientsList(input: IngredientsListInput!): IngredientsList
    updateIngredientsList(input: IngredientsListInput!): IngredientsList
  }
`;
