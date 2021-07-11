// [src/routes/base.js]

const authMiddleware = require('../middlewares/auth');

const express = require('express');

const router = express.Router();

// unprotected endpoint
router.use('/auth', require('./auth.routes'));
router.use('/movies', require('./movie.routes'));


// protected endpoints
router.use('/user', authMiddleware.protected, require('./users.routes'));

module.exports = router;