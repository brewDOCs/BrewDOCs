import { gql } from "apollo-server-express";

export const beerMasterTypeDefs = gql`
  type BeerMaster {
    _id: ID!
    name: String!
    description: String
    type: String
    abv: Float
    ibu: Float
    image: String
  }
  type Query {
    getBeerMasters: [BeerMaster]
    getBeerMasterById(id: ID!): BeerMaster
    getAllBeerMastersByUserId(userId: ID!): [BeerMaster]
    getOneBeerMasterByUserId(userId: ID!, beerMasterId: ID!): [BeerMaster]
  }
  type Mutation {
    addBeerMaster(name: String!, type: String!): BeerMaster
    removeBeerMaster(id: ID!): BeerMaster
    createBeerMaster(name: String!, type: String!, userId: ID!): BeerMaster
    deleteBeerMaster(id: ID!, userId: ID!): BeerMaster
    updateBeerMaster(
      id: ID!
      userId: ID!
      name: String!
      type: String!
      abv: Float
      ibu: Float
      image: String
    ): BeerMaster
  }
`;
