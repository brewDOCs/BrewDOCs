// Conditioning Type Definitions

import { gql } from "apollo-server-express";

export const conditioningTypeDefs = gql`
  type Conditioning {
    _id: ID!
    conditioningDescription: String!
    conditioningTemperature: Float!
    conditioningStartTime: Float!
    conditioningEndTime: Float!
  }
  type Query {
    getAllConditioning: [Conditioning]
    getConditioningById(conditioningId: ID!): Conditioning
    getAllConditioningByBeerMasterId(beerMasterId: ID!): [Conditioning]
    getOneConditioningByBeerMasterId(
      conditioningId: ID!
      beerMasterId: ID!
    ): Conditioning
  }
  type Mutation {
    addConditioning(
      conditioningDescription: String!
      conditioningTemperature: Float!
      conditioningStartTime: Float!
      conditioningEndTime: Float!
    ): Conditioning
  }
`;
