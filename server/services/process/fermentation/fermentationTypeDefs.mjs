// Fermentation Type Definitions

import { gql } from "apollo-server-express";

export const fermentationTypeDefs = gql`
  type Fermentation {
    _id: ID!
    fermentationDescription: String!
    fermentationTemperature: Float!
    fermentationStartTime: Float!
    fermentationEndTime: Float!
    yeast: [Yeast]
    additives: [Additives]
  }
  type Query {
    getAllFermentation: [Fermentation]
    getFermentationById(fermentationId: ID!): Fermentation
    getAllFermentationByBeerMasterId(beerMasterId: ID!): [Fermentation]
    getOneFermentationByBeerMasterId(
      fermentationId: ID!
      beerMasterId: ID!
    ): Fermentation
  }
  type Mutation {
    addFermentation(
      fermentationDescription: String!
      fermentationTemperature: Float!
      fermentationStartTime: Float!
      fermentationEndTime: Float!
    ): Fermentation
  }
`;
