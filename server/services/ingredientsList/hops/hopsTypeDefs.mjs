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
    getAllHops: [Hops]
    getHopsById(hopsId: ID!): Hops
    retrieveHopsByIngredientsListID(ingredientsListId: ID!): [Hops]
    retrieveOneHopsByIngredientsListID(
      ingredientsListId: ID!
      hopsId: ID!
    ): Hops
  }
  type Mutation {
    addHops(hopsName: String!, hopsAmount: Float): Hops
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
