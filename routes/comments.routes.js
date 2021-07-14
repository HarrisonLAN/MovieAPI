
const userController = require('../controllers/comments.controller')
const asyncHandler = require('../middlewares/err.handler')

const express = require('express');

const router = express.Router();

router.get('/comments/:id', userController.getCommentsBasedOnMovie);
router.post('/comments/post_comment', userController.postComment);
router.delete('/comments/delete/:id', userController.deleteComment);

module.exports = router;