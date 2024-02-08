// BeerMaster Type Definitions

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
    ingredientsList: [IngredientsList]
    ingredientsListMaster: IngredientsList
  }
  type Query {
    getBeerMasters: [BeerMaster]
    getBeerMasterById(id: ID!): BeerMaster
    getAllBeerMastersByUserId(userId: ID!): [BeerMaster]
    getOneBeerMasterByUserId(userId: ID!, beerMasterId: ID!): [BeerMaster]
  }
  type Mutation {
    # these are for admin use and should NOT be used in the client
    addBeerMaster(name: String!, type: String!): BeerMaster
    addBeerMasterToUser(userId: ID!, beerMasterId: ID!): [BeerMaster]
    removeBeerMaster(id: ID!): BeerMaster
    # these are for user use and should be used in the client
    createBeerMaster(name: String!, type: String!, userId: ID!): BeerMaster
    deleteBeerMaster(id: ID!, userId: ID!): BeerMaster
    updateBeerMaster(
      id: ID!
      userId: ID!
      name: String
      type: String
      abv: Float
      ibu: Float
      image: String
    ): BeerMaster
  }
`;
