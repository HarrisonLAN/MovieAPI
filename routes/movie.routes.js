const controller = require('../controllers/movies.controller');
const userController = require('../controllers/comments.controller')

const express = require('express');

const router = express.Router();

router.get('/', controller.getAllMovies);
router.get('/:id', controller.getMovieById);
router.get('/comments/:id', userController.getCommentsBasedOnMovie);

module.exports = router;