// Cooling Type Definitions

import { gql } from "apollo-server-express";

export const coolingTypeDefs = gql`
  type Cooling {
    _id: ID!
    coolingDescription: String!
    coolingTemperature: Float!
    coolingStartTime: Float
    coolingEndTime: Float
    coolingElapsedTime: Float
    coolingNotificationTime: Float
    hops: [Hops]
    additives: [Additives]
  }
  type Query {
    getAllCoolingStepsByProcessId(processId: ID!): [Cooling]
    getOneCoolingStepByProcessId(coolingId: ID!, processId: ID!): Cooling
  }
  type Mutation {
    createCoolingStep(
      processId: ID!
      coolingDescription: String!
      coolingTemperature: Float!
      coolingStartTime: Float
      coolingEndTime: Float
      coolingElapsedTime: Float
      coolingNotificationTime: Float
      hops: [ID]
      additives: [ID]
    ): Cooling
    removeCoolingStep(processId: ID!, coolingId: ID!): Cooling
    updateCoolingStep(
      coolingId: ID!
      coolingDescription: String
      coolingTemperature: Float
      coolingStartTime: Float
      coolingEndTime: Float
      coolingElapsedTime: Float
      coolingNotificationTime: Float
      hops: [ID]
      additives: [ID]
    ): Cooling
  }
`;
