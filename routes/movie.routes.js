const controller = require('../controllers/movies.controller');

const express = require('express');

const router = express.Router();

router.get('/', controller.getAllMovies);
router.get('/:id', controller.getMovieById);

module.exports = router;