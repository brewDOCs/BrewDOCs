// Clarification Type Definitions

import { gql } from "apollo-server-express";

export const clarificationTypeDefs = gql`
  type Clarification {
    _id: ID!
    clarificationDescription: String!
    clarificationTemperature: Float!
    clarificationStartTime: Float!
    clarificationEndTime: Float!
    additives: [Additives]
  }
  type Query {
    getAllClarification: [Clarification]
    getClarificationById(clarificationId: ID!): Clarification
    getAllClarificationByBeerMasterId(beerMasterId: ID!): [Clarification]
    getOneClarificationByBeerMasterId(
      clarificationId: ID!
      beerMasterId: ID!
    ): Clarification
  }
  type Mutation {
    addClarification(
      clarificationDescription: String!
      clarificationTemperature: Float!
      clarificationStartTime: Float!
      clarificationEndTime: Float!
    ): Clarification
  }
`;
