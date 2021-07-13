const { ObjectID } = require('mongodb');
const Comments = require('../models/comments.model');

const repository = {};

repository.getAllCommentsBasedOnMovie = (id) => {
    return Comments.find({movie_id: ObjectID(id)});
};

module.exports = repository;