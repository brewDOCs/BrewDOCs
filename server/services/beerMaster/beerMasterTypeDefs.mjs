// BeerMaster Type Definitions

import { gql } from "apollo-server-express";

export const beerMasterTypeDefs = gql`
  type BeerMaster {
    _id: ID!
    name: String!
    type: String!
    description: String
    abv: Float
    ibu: Float
    image: String
    brewRun: [BrewRun]
    brewRunMaster: BrewRun
  }
  type Query {
    getAllBeerMastersByBreweryId(breweryId: ID!): [BeerMaster]
    getOneBeerMasterById(beerMasterId: ID!): BeerMaster
  }
  type Mutation {
    createBeerMasterByBreweryId(name: String!, type: String!, breweryId: ID!): BeerMaster
    removeBeerMasterByBreweryId(beerMasterId: ID!): BeerMaster
    updateBeerMaster(
      beerMasterId: ID!
      name: String
      type: String
      description: String
      abv: Float
      ibu: Float
      image: String
      brewRun: [ID]
      brewRunMaster: ID
    ): BeerMaster
  }
`;
