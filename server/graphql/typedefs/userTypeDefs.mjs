// User Type Definitions

import { gql } from "apollo-server-express";

export const userTypeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }
  type AuthPayload {
    user: User!
    token: String!
  }
  type Query {
    getUsers: [User]
    getOneUser(_id: ID!): User
  }
  type Mutation {
    login(username: String!, password: String!): AuthPayload
    signup(username: String!, email: String!, password: String!): AuthPayload
    addUser(username: String!, email: String!, password: String!): User
  }
`;
