// Malt Type Definitions

import { gql } from "apollo-server-express";

export const maltTypeDefs = gql`
  type Malt {
    maltName: String
    maltAmount: Float
  }
  type Query {
    getAllMalts: [Malt]
    getMaltById(maltId: ID!): Malt
  }
  type Mutation {
    addMalt(maltName: String!, maltAmount: Float): Malt
  }
`;
