// Yeast Type Definitions

import { gql } from "apollo-server-express";

export const yeastTypeDefs = gql`
  type Yeast {
    _id: ID!
    yeastName: String
    strainType: String
    strainSubType: String
    attenuation: Float
    flocculation: String
    yeastAmount: Float
  }
  type Query {
    retrieveAllYeastByIngredientsListId(ingredientsListId: ID!): [Yeast]
    retrieveOneYeastByIngredientsListId(
      ingredientsListId: ID!
      yeastId: ID!
    ): Yeast
  }
  type Mutation {
    createYeastByIngredientsList(
      ingredientsListId: ID!
      yeastName: String!
      strainType: String!
      strainSubType: String
      attenuation: Float
      flocculation: String
      yeastAmount: Float
    ): Yeast
    updateYeast(
      yeastId: ID!
      yeastName: String
      strainType: String
      strainSubType: String
      attenuation: Float
      flocculation: String
      yeastAmount: Float
    ): Yeast
    removeYeastByIngredientsList(ingredientsListId: ID!, yeastId: ID!): Yeast
  }
`;
