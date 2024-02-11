// Lautering Type Definitions

import { gql } from "apollo-server-express";

export const lauteringTypeDefs = gql`
  type Lautering {
    _id: ID!
    lauteringDescription: String!
    lauteringTemperature: Float!
    lauteringStartTime: Float
    lauteringEndTime: Float
    lauteringElapsedTime: Float
    lauteringNotificationTime: Float
  }
  type Query {
    getAllLauteringStepsByProcessId(processId: ID!): [Lautering]
    getOneLauteringStepByProcessId(lauteringId: ID!, processId: ID!): Lautering
  }
  type Mutation {
    createLauteringStep(
      processId: ID!
      lauteringDescription: String!
      lauteringTemperature: Float!
      lauteringStartTime: Float
      lauteringEndTime: Float
      lauteringElapsedTime: Float
      lauteringNotificationTime: Float
    ): Lautering
    removeLauteringStep(processId: ID!, lauteringId: ID!): Lautering
    updateLauteringStep(
      lauteringId: ID!
      lauteringDescription: String
      lauteringTemperature: Float
      lauteringStartTime: Float
      lauteringEndTime: Float
      lauteringElapsedTime: Float
      lauteringNotificationTime: Float
    ): Lautering
  }
`;
