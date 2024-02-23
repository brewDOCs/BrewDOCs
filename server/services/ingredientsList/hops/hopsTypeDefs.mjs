// Hops Type Definitions

import { gql } from "apollo-server-express";

export const hopsTypeDefs = gql`
  type Hops {
    _id: ID!
    hopsName: String!
    hopsAlphaAcid: Float
    hopsType: String
    hopsAmount: Float
  }
  type Query {
    getHopsByIngredientsListID(ingredientsListId: ID!): [Hops]
    getOneHopsByIngredientsListID(ingredientsListId: ID!, hopsId: ID!): Hops
  }
  type Mutation {
    createHopsByIngredientsListId(
      ingredientsListId: ID!
      hopsName: String!
      hopsAlphaAcid: Float
      hopsType: String
      hopsAmount: Float
    ): Hops
    updateHops(
      hopsId: ID!
      hopsName: String
      hopsAlphaAcid: Float
      hopsType: String
      hopsAmount: Float
    ): Hops
    removeHopsByIngredientsListId(ingredientsListId: ID!, hopsId: ID!): Hops
  }
`;
