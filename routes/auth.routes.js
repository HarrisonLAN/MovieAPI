const controller = require('../controllers/auth.controller');
const express = require('express');

const router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;