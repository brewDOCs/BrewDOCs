// Wort Step Type Definitions

import { gql } from "apollo-server-express";

export const wortTypeDefs = gql`
  # Custom scalar type for handling Date objects
  scalar Date
  type Wort {
    _id: ID!
    wortDescription: String!
    wortTemperature: Float!
    wortStartTime: Date
    wortEndTime: Date
    wortElapsedTime: Float
    wortNotificationTime: Float
    hops: [Hops]
    additives: [Additives]
  }
  type Query {
    getAllWortStepsByProcessId(processId: ID!): [Wort]
    getOneWortStepByProcessId(wortId: ID!, processId: ID!): Wort
  }
  type Mutation {
    createWortStep(
      processId: ID!
      wortDescription: String!
      wortTemperature: Float!
      wortStartTime: Date
      wortEndTime: Date
      wortElapsedTime: Float
      wortNotificationTime: Float
      hops: [ID]
      additives: [ID]
    ): Wort
    removeWortStep(processId: ID!, wortId: ID!): Wort
    updateWortStep(
      wortId: ID!
      wortDescription: String
      wortTemperature: Float
      wortStartTime: Date
      wortEndTime: Date
      wortElapsedTime: Float
      wortNotificationTime: Float
      hops: [ID]
      additives: [ID]
    ): Wort
  }
`;
