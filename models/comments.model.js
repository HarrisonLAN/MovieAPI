const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentsSchema = new Schema({
    name: String,
    email: String,
    movie_id: ObjectID,
    text: String,
    date: Date
});

module.exports = mongoose.model('comments', CommentsSchema);