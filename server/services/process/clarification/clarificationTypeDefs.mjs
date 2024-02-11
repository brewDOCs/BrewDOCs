// Clarification Type Definitions

import { gql } from "apollo-server-express";

export const clarificationTypeDefs = gql`
  type Clarification {
    _id: ID!
    clarificationDescription: String!
    clarificationTemperature: Float!
    clarificationStartTime: Float
    clarificationEndTime: Float
    clarificationElapsedTime: Float
    clarificationNotificationTime: Float
    additives: [Additives]
  }
  type Query {
    getAllClarificationStepsByProcessId(processId: ID!): [Clarification]
    getOneClarificationStepByProcessId(
      clarificationId: ID!
      processId: ID!
    ): Clarification
  }
  type Mutation {
    createClarificationStep(
      processId: ID!
      clarificationDescription: String!
      clarificationTemperature: Float!
      clarificationStartTime: Float
      clarificationEndTime: Float
      clarificationElapsedTime: Float
      clarificationNotificationTime: Float
      additives: [ID]
    ): Clarification
    removeClarificationStep(processId: ID!, clarificationId: ID!): Clarification
    updateClarificationStep(
      clarificationId: ID!
      clarificationDescription: String
      clarificationTemperature: Float
      clarificationStartTime: Float
      clarificationEndTime: Float
      clarificationElapsedTime: Float
      clarificationNotificationTime: Float
      additives: [ID]
    ): Clarification
  }
`;
