const Movie = require('../models/movies.model');

const repository = {};

repository.getAllMovies = () => {
    return Movie.find({}).lean();
};

repository.getMovieById = (id) => {
    return Movie.findById(id);
};

module.exports = repository;