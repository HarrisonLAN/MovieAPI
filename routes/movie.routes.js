const controller = require('../controllers/movies.controller');

const express = require('express');

const router = express.Router();

router.get('/', controller.getAllMovies);
router.get('/:id', controller.getMovieById);
router.get('/sortedOnRating', controller.getDescMovieRatings);

module.exports = router;