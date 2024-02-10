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
    retrieveAllBeerMastersByUserId(userId: ID!): [BeerMaster]
    retrieveOneBeerMasterByUserId(beerMasterId: ID!, userId: ID!): BeerMaster
  }
  type Mutation {
    createBeerMasterByUserID(
      name: String!
      type: String!
      userId: ID!
    ): BeerMaster
    removeBeerMasterByUserID(id: ID!, userId: ID!): BeerMaster
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
