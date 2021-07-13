const { ObjectID } = require('mongodb');
const Comments = require('../models/comments.model');

const repository = {};

repository.getAllCommentsBasedOnMovie = (id) => {
    return Comments.find({ movie_id: ObjectID(id) });
};
repository.getAllCommentsBasedOnMovie = (id) => {
    Comments.findByIdAndDelete(id);
};

repository.postComment = (payload) => {
    try {
        return Comments.create(payload);
    } catch (error) {
        //console.log(error)
        return (error);
    }
};

module.exports = repository;