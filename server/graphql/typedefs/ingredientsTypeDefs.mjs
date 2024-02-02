import { gql } from "apollo-server-express";

export const ingredientsTypeDefs = gql`
  type Ingredient {
    _id: ID!
  }
  type Query {
    getIngredients: [Ingredient]
  }
#   type Mutation {

#   }
`;