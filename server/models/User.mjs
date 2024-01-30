import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Please enter a username!',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Please enter an email address!',
        match: [/.+@.+\..+/]
    },
});

const User = model('User', userSchema);

export default User;
