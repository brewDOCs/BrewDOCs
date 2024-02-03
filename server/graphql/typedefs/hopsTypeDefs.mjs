// Hops Type Definitions

import { gql } from "apollo-server-express";

export const hopsTypeDefs = gql`
  type Hops {
    hopsName: String
    hopsAmount: Float
  }
  type Query {
    getAllHops: [Hops]
    getHopsById(hopsId: ID!): Hops
  }
  type Mutation {
    addHops(hopsName: String!, hopsAmount: Float): Hops
  }
`;
