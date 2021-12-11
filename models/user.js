const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    location: {
        latitude: {
            type: String
        },
        lognitude: {
            type: String
        }
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;