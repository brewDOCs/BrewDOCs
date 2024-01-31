// connection.mjs
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI || "mongodb://127.0.0.1:27017/BrewDOCS",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
);

const connection = mongoose.connection;

connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

export { connection as mongooseConnection };
