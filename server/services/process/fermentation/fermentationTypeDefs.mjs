// Fermentation Type Definitions

import { gql } from "apollo-server-express";

export const fermentationTypeDefs = gql`
  type Fermentation {
    _id: ID!
    fermentationDescription: String!
    fermentationTemperature: Float!
    fermentationStartTime: Float
    fermentationEndTime: Float
    fermentationElapsedTime: Float
    fermentationNotificationTime: Float
    yeast: [Yeast]
    additives: [Additives]
  }
  type Query {
    getAllFermentationStepsByProcessId(processId: ID!): [Fermentation]
    getOneFermentationStepByProcessId(
      fermentationId: ID!
      processId: ID!
    ): Fermentation
  }
  type Mutation {
    createFermentationStep(
      processId: ID!
      fermentationDescription: String!
      fermentationTemperature: Float!
      fermentationStartTime: Float
      fermentationEndTime: Float
      fermentationElapsedTime: Float
      fermentationNotificationTime: Float
      yeast: [ID]
      additives: [ID]
    ): Fermentation
    removeFermentationStep(processId: ID!, fermentationId: ID!): Fermentation
    updateFermentationStep(
      fermentationId: ID!
      fermentationDescription: String
      fermentationTemperature: Float
      fermentationStartTime: Float
      fermentationEndTime: Float
      fermentationElapsedTime: Float
      fermentationNotificationTime: Float
      yeast: [ID]
      additives: [ID]
    ): Fermentation
  }
`;
