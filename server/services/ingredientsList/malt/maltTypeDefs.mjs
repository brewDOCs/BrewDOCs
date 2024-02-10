// Malt Type Definitions

import { gql } from "apollo-server-express";

export const maltTypeDefs = gql`
  type Malt {
    _id: ID!
    maltName: String
    lovibondColorScale: Float
    sucrosePointsPerPoundPerGallon: Float
    diastaticPower: Float
    maltAmount: Float
  }
  type Query {
    retrieveAllMaltsByIngredientsListId(ingredientsListId: ID!): [Malt]
    retrieveOneMaltByIngredientsListId(
      ingredientsListId: ID!
      maltId: ID!
    ): Malt
  }
  type Mutation {
    createMaltByIngredientsList(
      ingredientsListId: ID!
      maltName: String!
      lovibondColorScale: Float
      sucrosePointsPerPoundPerGallon: Float
      diastaticPower: Float
      maltAmount: Float
    ): Malt
    updateMalt(
      maltId: ID!
      maltName: String
      lovibondColorScale: Float
      sucrosePointsPerPoundPerGallon: Float
      diastaticPower: Float
      maltAmount: Float
    ): Malt
    removeMaltByIngredientsList(ingredientsListId: ID!, maltId: ID!): Malt
  }
`;
