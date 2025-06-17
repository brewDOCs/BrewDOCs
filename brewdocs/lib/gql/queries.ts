import { gql } from "@apollo/client";

// USER QUERIES

export const GET_USERS = gql`
  query {
    getUsers {
      username
    }
  }
`;

export const GET_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      username
      email
      breweries {
        id
        name
      }
    }
  }
`;
