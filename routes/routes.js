// [src/routes/base.js]

const authMiddleware = require('../middlewares/auth');

const express = require('express');

const router = express.Router();

// unprotected endpoint
router.use('/auth', require('./auth.routes'));


// protected endpoints
router.use('/user', authMiddleware.protected, require('./users.routes'));
router.use('/movies', require('./movie.routes'));
router.use('/comments', require('./comments.routes'));
router.use('/theater', require('./theater.routes'));

module.exports = router;