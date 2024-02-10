// Water Type Definitions

import { gql } from "apollo-server-express";

export const waterTypeDefs = gql`
  type Water {
    _id: ID!
    waterAlkalinity: Float
    waterCalcium: Float
    waterMagnesium: Float
    waterSodium: Float
    waterSulfate: Float
    waterChloride: Float
    waterAmount: Float
  }
  type Query {
    retrieveAllWaterByIngredientsListID(ingredientsListId: ID!): [Water]
    retrieveOneWaterByIngredientsListID(
      ingredientsListId: ID!
      waterId: ID!
    ): Water
  }
  type Mutation {
    createWaterByIngredientsListID(
      ingredientsListId: ID!
      waterAlkalinity: Float!
      waterCalcium: Float
      waterMagnesium: Float
      waterSodium: Float
      waterSulfate: Float
      waterChloride: Float
      waterAmount: Float
    ): Water
    updateWater(
      waterId: ID!
      waterAlkalinity: Float
      waterCalcium: Float
      waterMagnesium: Float
      waterSodium: Float
      waterSulfate: Float
      waterChloride: Float
      waterAmount: Float
    ): Water
    removeWaterByIngredientsListID(ingredientsListId: ID!, waterId: ID!): Water
  }
`;
