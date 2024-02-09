// Lautering Type Definitions

import { gql } from "apollo-server-express";

export const lauteringTypeDefs = gql`
  type Lautering {
    _id: ID!
    lauteringDescription: String!
    lauteringTemperature: Float!
    lauteringStartTime: Float!
    lauteringEndTime: Float!
  }
  type Query {
    getAllLautering: [Lautering]
    getLauteringById(lauteringId: ID!): Lautering
    getAllLauteringByBeerMasterId(beerMasterId: ID!): [Lautering]
    getOneLauteringByBeerMasterId(
      lauteringId: ID!
      beerMasterId: ID!
    ): Lautering
  }
  type Mutation {
    addLautering(
      lauteringDescription: String!
      lauteringTemperature: Float!
      lauteringStartTime: Float!
      lauteringEndTime: Float!
    ): Lautering
  }
`;
