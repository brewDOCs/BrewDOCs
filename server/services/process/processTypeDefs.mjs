// Process Type Definitions

import { gql } from "apollo-server-express";

export const processTypeDefs = gql`
  type Process {
    _id: ID!
    mashing: [Mashing]
    lautering: [Lautering]
    wort: [Wort]
    clarification: [Clarification]
    cooling: [Cooling]
    fermentation: [Fermentation]
    conditioning: [Conditioning]
    lastModified: String
  }
  type Query {
    getAllProcessesByBrewRunId(brewRunId: ID!): [Process]
    getOneProcessById(processId: ID!): Process
  }
  type Mutation {
    createProcess(brewRunId: ID!): Process
    removeProcess(processId: ID!, brewRunId: ID!): Process
    updateProcess(processId: ID!): Process
  }
`;
