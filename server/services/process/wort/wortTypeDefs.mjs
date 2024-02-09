// Wort Type Definitions

import { gql } from "apollo-server-express";

export const wortTypeDefs = gql`
  type Wort {
    _id: ID!
    wortDescription: String!
    wortTemperature: Float!
    wortStartTime: Float!
    wortEndTime: Float!
    hops: [Hops]
    additives: [Additives]
  }
  type Query {
    getAllWort: [Wort]
    getWortById(wortId: ID!): Wort
    getAllWortByBeerMasterId(beerMasterId: ID!): [Wort]
    getOneWortByBeerMasterId(wortId: ID!, beerMasterId: ID!): Wort
  }
  type Mutation {
    addWort(
      wortDescription: String!
      wortTemperature: Float!
      wortStartTime: Float!
      wortEndTime: Float!
    ): Wort
  }
`;
