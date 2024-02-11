// Wort Type Definitions

import { gql } from "apollo-server-express";

export const wortTypeDefs = gql`
  type Wort {
    _id: ID!
    wortDescription: String!
    wortTemperature: Float!
    wortStartTime: Float
    wortEndTime: Float
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
      wortStartTime: Float
      wortEndTime: Float
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
      wortStartTime: Float
      wortEndTime: Float
      wortElapsedTime: Float
      wortNotificationTime: Float
      hops: [ID]
      additives: [ID]
    ): Wort
  }
`;
