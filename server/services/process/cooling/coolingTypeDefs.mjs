// Cooling Type Definitions

import { gql } from "apollo-server-express";

export const coolingTypeDefs = gql`
  type Cooling {
    _id: ID!
    coolingDescription: String!
    coolingTemperature: Float!
    coolingStartTime: Float!
    coolingEndTime: Float!
    hops: [Hops]
    additives: [Additives]
  }
  type Query {
    getAllCooling: [Cooling]
    getCoolingById(coolingId: ID!): Cooling
    getAllCoolingByBeerMasterId(beerMasterId: ID!): [Cooling]
    getOneCoolingByBeerMasterId(coolingId: ID!, beerMasterId: ID!): Cooling
  }
  type Mutation {
    addCooling(
      coolingDescription: String!
      coolingTemperature: Float!
      coolingStartTime: Float!
      coolingEndTime: Float!
    ): Cooling
  }
`;
