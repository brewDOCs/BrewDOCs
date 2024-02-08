// Water Type Definitions

import { gql } from "apollo-server-express";

export const waterTypeDefs = gql`
  type Water {
    _id: ID!
    waterAlkalinity: Float
    waterAmount: Float
  }
  type Query {
    getAllWater: [Water]
    getWaterById(waterId: ID!): Water
  }
  type Mutation {
    addWater(waterAlkalinity: Float!, waterAmount: Float): Water
  }
`;
