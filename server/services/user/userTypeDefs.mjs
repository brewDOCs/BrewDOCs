// User Type Definitions

import { gql } from "apollo-server-express";

export const userTypeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    breweries: [Brewery]
    employees: [User]
    userType: String!
  }
  type AuthPayload {
    username: String!
    _id: ID!
  }
  type Query {
    getUsers: [User]
    getOneUser(_id: ID!): User
    getAllEmployeesByBreweryId(breweryId: ID!): [User]
  }
  type Mutation {
    login(username: String!, password: String!): AuthPayload
    signup(username: String!, email: String!, password: String!): AuthPayload
    signupEmployee(
      username: String!
      email: String!
      password: String!
      userType: String!
      breweryId: ID!
    ): AuthPayload
    updateUser(_id: ID!, username: String, email: String, password: String): User
    logout: String
    removeEmployeeByBreweryId(_id: ID!, breweryId: ID!): User
    deleteUser(_id: ID!): User
  }
`;
