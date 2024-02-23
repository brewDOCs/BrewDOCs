// Additives Type Definitions

import { gql } from "apollo-server-express";

export const additivesTypeDefs = gql`
  type Additives {
    _id: ID!
    additiveName: String!
    additiveType: String!
    additiveAmount: Float
  }
  type Query {
    getAllAdditivesByIngredientsListId(ingredientsListId: ID!): [Additives]
    getOneAdditiveByIdAndIngredientsListId(additiveId: ID!, ingredientsListId: ID!): Additives
    getAllAdditivesByIngredientsListIdAndAdditiveType(
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
      additiveId: ID!
      additiveName: String
      additiveType: String
      additiveAmount: Float
    ): Additives
    removeAdditiveByIngredientsListID(ingredientsListId: ID!, additiveId: ID!): Additives
  }
`;
