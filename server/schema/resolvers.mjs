// resolvers.mjs
import User from '../models/User.mjs';

const resolvers = {
    Query: {
        getUsers: async () => {
            return await User.find({});
        },
    },
    Mutation: {
        addUser: async (parent, { username, email }) => {
            const user = await User.create({ username, email });
            return user;
        },
    },
};

export default resolvers;