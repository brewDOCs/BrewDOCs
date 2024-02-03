// Yeast Type Definitions

import { gql } from "apollo-server-express";

export const yeastTypeDefs = gql`
  type Yeast {
    yeastName: String
    yeastAmount: Float
  }
  type Query {
    getAllYeast: [Yeast]
    getYeastById(yeastId: ID!): Yeast
  }
  type Mutation {
    addYeast(yeastName: String!, yeastAmount: Float): Yeast
  }
`;
