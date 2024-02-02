// User Type Definitions

import { gql } from "apollo-server-express";

export const userTypeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!): User
  }
`;
