const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentsSchema = new Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('comments', CommentsSchema);