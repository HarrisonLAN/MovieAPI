
const userController = require('../controllers/comments.controller')

const express = require('express');

const router = express.Router();

router.get('/comments/:id', userController.getCommentsBasedOnMovie);

module.exports = router;