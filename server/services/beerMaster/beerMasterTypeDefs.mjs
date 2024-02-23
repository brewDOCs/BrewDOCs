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
    ingredientsList: [IngredientsList]
    ingredientsListMaster: IngredientsList
    process: [Process]
    processMaster: Process
  }
  type Query {
    getAllBeerMastersByUserId(userId: ID!): [BeerMaster]
    getOneBeerMasterById(beerMasterId: ID!): BeerMaster
  }
  type Mutation {
    createBeerMasterByUserId(name: String!, type: String!, userId: ID!): BeerMaster
    removeBeerMasterByUserId(beerMasterId: ID!): BeerMaster
    updateBeerMaster(
      beerMasterId: ID!
      name: String
      type: String
      description: String
      abv: Float
      ibu: Float
      image: String
    ): BeerMaster
  }
`;
