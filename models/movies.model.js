const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    num_mflix_comments: Number,
    poster: String,
    title: String,
    fullplot: String,
    languages: [String],
    released: Date,
    directors: [String],
    rated: String,
    writers: [String],
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    lastupdated: String,
    year: Number,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    countries: [String],
    type: String,
    tomatoes: {
        viewr: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        critic: {
            rating: Number,
            numReviews: Number,
            meter: Number

        },
        fresh: Number,
        rotten: Number,
        lastupdated: Date

    }
});

module.exports = mongoose.model('movies', MovieSchema);