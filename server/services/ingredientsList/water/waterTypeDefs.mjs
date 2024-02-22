// Water Type Definitions

import { gql } from "apollo-server-express";

export const waterTypeDefs = gql`
  type Water {
    _id: ID!
    waterAlkalinity: Float!
    waterCalcium: Float
    waterMagnesium: Float
    waterSodium: Float
    waterSulfate: Float
    waterChloride: Float
    waterAmount: Float
  }
  type Query {
    getAllWaterByIngredientsListId(ingredientsListId: ID!): [Water]
    getOneWaterByIngredientsListId(ingredientsListId: ID!, waterId: ID!): Water
  }
  type Mutation {
    createWaterByIngredientsListId(
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
    removeWaterByIngredientsListId(ingredientsListId: ID!, waterId: ID!): Water
  }
`;
