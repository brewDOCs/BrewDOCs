// Additives Type Definitions

import { gql } from "apollo-server-express";

export const additivesTypeDefs = gql`
  type Additives {
    _id: ID!
    additiveName: String
    additiveType: String
    additiveAmount: Float
  }
  type Query {
    retrieveAllAdditivesByIngredientsListId(ingredientsListId: ID!): [Additives]
    retrieveOneAdditiveByIdAndIngredientsListId(
      additiveID: ID!
      ingredientsListId: ID!
    ): Additives
    retrieveAllAdditivesByIngredientsListIdAndAdditiveType(
      ingredientsListId: ID!
      additiveType: String!
    ): [Additives]
  }
  type Mutation {
    createAdditiveByIngredientsListID(
      ingredientsListId: ID!
      additiveName: String!
      additiveType: String!
      additiveAmount: Float
    ): Additives
    updateAdditive(
      additiveID: ID!
      additiveName: String
      additiveType: String
      additiveAmount: Float
    ): Additives
    removeAdditiveByIngredientsListID(
      ingredientsListId: ID!
      additiveID: ID!
    ): Additives
  }
`;
