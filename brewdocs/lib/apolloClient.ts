// /lib/apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql", // Your GraphQL server URI
  credentials: "include", // ✅ Important: Include cookies with each request
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
