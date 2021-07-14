const controller = require('../controllers/movies.controller');
const express = require('express');
const asyncHandler = require('../middlewares/err.handler')

const router = express.Router();

router.get('/', asyncHandler(controller.getAllMovies));
router.get('/:id', asyncHandler(controller.getMovieById));
router.get('/sortedOnRating', asyncHandler(controller.getDescMovieRatings));

module.exports = router;