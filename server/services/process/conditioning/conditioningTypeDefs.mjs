// Conditioning Type Definitions

import { gql } from "apollo-server-express";

export const conditioningTypeDefs = gql`
  type Conditioning {
    _id: ID!
    conditioningDescription: String!
    conditioningTemperature: Float!
    conditioningStartTime: Float
    conditioningEndTime: Float
    conditioningElapsedTime: Float
    conditioningNotificationTime: Float
  }
  type Query {
    getAllConditioningStepsByProcessId(processId: ID!): [Conditioning]
    getOneConditioningStepByProcessId(
      conditioningId: ID!
      processId: ID!
    ): Conditioning
  }
  type Mutation {
    addConditioning(
      processId: ID!
      conditioningDescription: String!
      conditioningTemperature: Float!
      conditioningStartTime: Float
      conditioningEndTime: Float
      conditioningElapsedTime: Float
      conditioningNotificationTime: Float
    ): Conditioning
    removeConditioningStep(processId: ID!, conditioningId: ID!): Conditioning
    updateConditioningStep(
      conditioningId: ID!
      conditioningDescription: String
      conditioningTemperature: Float
      conditioningStartTime: Float
      conditioningEndTime: Float
      conditioningElapsedTime: Float
      conditioningNotificationTime: Float
    ): Conditioning
  }
`;
