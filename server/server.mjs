// server.mjs
import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import express from "express";
import http from "http";
import { mongooseConnection } from "./config/connection.mjs";
import { typeDefs, resolvers } from "./services/graphql.mjs";
import cookieParser from "cookie-parser";
import adminRoutes from "./utils/AdminRoutes.mjs";

const PORT = process.env.PORT || 4000;

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  await mongooseConnection;
  console.log("Connected to MongoDB");

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault(),
    ],
    context: ({ req, res }) => ({ req, res }), // Pass request and response objects to context
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser());

  app.use("/admin", adminRoutes);

  await server.start();
  server.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer();
