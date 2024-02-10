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
    getAllYeast: [Yeast]
    getYeastById(yeastId: ID!): Yeast
    retrieveAllYeastByIngredientsListId(ingredientsListId: ID!): [Yeast]
    retrieveOneYeastByIngredientsListId(
      ingredientsListId: ID!
      yeastId: ID!
    ): Yeast
  }
  type Mutation {
    addYeast(yeastName: String!, yeastAmount: Float): Yeast
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
