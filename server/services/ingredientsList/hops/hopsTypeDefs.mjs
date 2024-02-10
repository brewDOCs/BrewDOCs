// Hops Type Definitions

import { gql } from "apollo-server-express";

export const hopsTypeDefs = gql`
  type Hops {
    _id: ID!
    hopsName: String
    hopsAlphaAcid: Float
    hopsType: String
    hopsAmount: Float
  }
  type Query {
    retrieveHopsByIngredientsListID(ingredientsListId: ID!): [Hops]
    retrieveOneHopsByIngredientsListID(
      ingredientsListId: ID!
      hopsId: ID!
    ): Hops
  }
  type Mutation {
    createHopsByIngredientsListID(
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
    removeHopsByIngredientsListID(ingredientsListId: ID!, hopsId: ID!): Hops
  }
`;
