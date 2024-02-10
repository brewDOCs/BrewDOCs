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
    getAllProcesses: [Process]
    getProcessById(id: ID!): Process
    getAllProcessesByBeerMasterId(beerMasterId: ID!): [Process]
    getOneProcessByBeerMasterId(beerMasterId: ID!, processId: ID!): Process
  }
  type Mutation {
    addProcess: Process
    addProcessByBeerMasterId(beerMasterId: ID!): Process
  }
`;