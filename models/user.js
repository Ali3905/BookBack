const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    listings: [],

})

const user = mongoose.model('user', userSchema);
module.exports = user;