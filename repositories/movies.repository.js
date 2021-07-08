const Movie = require('../models/movies.model');

const repository = {};

repository.getAllMovies = () => {
    return Movie.find({}).lean().limit(20);
};

repository.getMovieById = (id) => {
    return Movie.findById(id);
};

module.exports = repository;