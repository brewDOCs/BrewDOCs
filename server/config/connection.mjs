// connection.mjs
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

// Establishes connection to MongoDB and handles errors on initial connection
try {
  await mongoose.connect(MONGODB_URI || "mongodb://127.0.0.1:27017/BrewDOCS");
} catch (error) {
  handleError(error);
}

// Assigns the defautl connection object to a constant
const connection = mongoose.connection;

// Handles error after initial connection was established
connection.on("error", (error) => {
  logError(error);
});

// An 'open' event listener that logs a message when the connection is established
connection.once("open", () => {
  console.log("Connected to MongoDB");
});

export { connection as mongooseConnection };
