// Malt Type Definitions

import { gql } from "apollo-server-express";

export const maltTypeDefs = gql`
  type Malt {
    _id: ID!
    maltName: String
    lovibond: Float
    ppg: Float
    dp: Float
    maltAmount: Float
  }
  type Query {
    getAllMalts: [Malt]
    getMaltById(maltId: ID!): Malt
    retrieveAllMaltsByIngredientsListId(ingredientsListId: ID!): [Malt]
    retrieveOneMaltByIngredientsListId(
      ingredientsListId: ID!
      maltId: ID!
    ): Malt
  }
  type Mutation {
    addMalt(maltName: String!, maltAmount: Float): Malt
    createMaltByIngredientsList(
      ingredientsListId: ID!
      maltName: String!
      lovibond: Float
      ppg: Float
      dp: Float
      maltAmount: Float
    ): Malt
    updateMalt(
      maltId: ID!
      maltName: String
      lovibond: Float
      ppg: Float
      dp: Float
      maltAmount: Float
    ): Malt
    removeMaltByIngredientsList(ingredientsListId: ID!, maltId: ID!): Malt
  }
`;
