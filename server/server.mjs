// server.mjs
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import mongooseConnection from './config/connection.mjs'; // Update the path

import { typeDefs, resolvers } from './schema/index.mjs';

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);

    // Wait for the mongoose connection to be established
    await mongooseConnection;
    console.log('Connected to MongoDB');

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageLocalDefault(),
        ],
    });

    await server.start();
    server.applyMiddleware({ app });

    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();

