// mongooseConnection.mjs (ES module syntax)
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://BrewDOCs:Jiu8SXmqU7nMUjec@cluster0.crlxuhg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default mongoose.connection;
