const Movie = require('../models/movies.model');

const repository = {};

repository.getAllMovies = () => {
    return Movie.find({}).lean().limit(20);
};
repository.sortOnRating = () => {
    return Movie.find({ 'imdb.rating': { $type: 'string' } } && { 'imdb.rating': { $not: { $type: 'string' } } }, null, { sort: { 'imdb.rating': -1 } }, function (err, docs) { }).limit(20);
}

repository.getMovieById = (id) => {
    return Movie.findById(id);
};

module.exports = repository;