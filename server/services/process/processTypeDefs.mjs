// Process Type Definitions

import { gql } from "apollo-server-express";

export const processTypeDefs = gql`
  type Process {
    _id: ID!
  }
  type Query {
    getAllProcesses: [Process]
  }
  #   type Mutation {

  #   }
`;
