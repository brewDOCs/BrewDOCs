// Additives Type Definitions

import { gql } from "apollo-server-express";

export const additivesTypeDefs = gql`
  type Additives {
    _id: ID!
    additiveName: String
    additiveAmount: Float
  }
  type Query {
    getAllAdditives: [Additives]
    getAdditiveById(additiveID: ID!): Additives
  }
  type Mutation {
    addAdditives(additiveName: String!, additiveAmount: Float): Additives
  }
`;
