// Yeast Type Definitions

import { gql } from "apollo-server-express";

export const yeastTypeDefs = gql`
  type Yeast {
    _id: ID!
    yeastName: String!
    strainType: String!
    strainSubType: String
    attenuation: Float
    flocculation: String
    yeastAmount: Float
  }
  type Query {
    getAllYeastByIngredientsListId(ingredientsListId: ID!): [Yeast]
    getOneYeastByIngredientsListId(ingredientsListId: ID!, yeastId: ID!): Yeast
  }
  type Mutation {
    createYeastByIngredientsListId(
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
    removeYeastByIngredientsListId(ingredientsListId: ID!, yeastId: ID!): Yeast
  }
`;
