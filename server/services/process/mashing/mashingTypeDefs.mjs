// Mashing Type Definitions

import { gql } from "apollo-server-express";

export const mashingTypeDefs = gql`
  type Mashing {
    _id: ID!
    mashingDescription: String!
    mashingTemperature: Float!
    mashingStartTime: Float!
    mashingEndTime: Float!
    malt: [Malt]
    water: [Water]
    additives: [Additives]
  }
  type Query {
    getAllMashing: [Mashing]
    getMashingById(mashingId: ID!): Mashing
    getAllMashingByBeerMasterId(beerMasterId: ID!): [Mashing]
    getOneMashingByBeerMasterId(mashingId: ID!, beerMasterId: ID!): Mashing
  }
  type Mutation {
    addMashing(
      mashingDescription: String!
      mashingTemperature: Float!
      mashingStartTime: Float!
      mashingEndTime: Float!
    ): Mashing
  }
`;
