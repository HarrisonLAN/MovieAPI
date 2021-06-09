const controller = require('../controllers/user.controller');

const express = require('express');

const router = express.Router();

router.get('/account/:id', controller.getUser);
router.delete('/account/delete/:id', controller.deleteUser);
router.patch('/account/update/:id', controller.updateUser);

module.exports = router;