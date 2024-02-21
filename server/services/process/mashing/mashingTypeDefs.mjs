// Mashing Step Type Definitions

import { gql } from "apollo-server-express";

export const mashingTypeDefs = gql`
  # Custom scalar type for handling Date objects
  scalar Date
  type Mashing {
    _id: ID!
    mashingDescription: String!
    mashingTemperature: Float!
    mashingStartTime: Date
    mashingEndTime: Date
    mashingElapsedTime: Float
    mashingNotificationTime: Float
    malt: [Malt]
    water: [Water]
    additives: [Additives]
  }
  type Query {
    getAllMashingStepsByProcessId(processId: ID!): [Mashing]
    getOneMashingStepByProcessId(mashingId: ID!, processId: ID!): Mashing
  }
  type Mutation {
    createMashingStep(
      processId: ID!
      mashingDescription: String!
      mashingTemperature: Float!
      mashingStartTime: Date
      mashingEndTime: Date
      mashingElapsedTime: Float
      mashingNotificationTime: Float
      malt: [ID]
      water: [ID]
      additives: [ID]
    ): Mashing
    removeMashingStep(processId: ID!, mashingId: ID!): Mashing
    updateMashingStep(
      mashingId: ID!
      mashingDescription: String
      mashingTemperature: Float
      mashingStartTime: Date
      mashingEndTime: Date
      mashingElapsedTime: Float
      mashingNotificationTime: Float
      malt: [ID]
      water: [ID]
      additives: [ID]
    ): Mashing
  }
`;
