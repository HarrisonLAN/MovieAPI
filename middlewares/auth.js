//const config = require('../config');
const JWT = require('jsonwebtoken');
const middleware = {};

middleware.protected = (req, res, next) => {
    const token = req.headers.token;

    JWT.verify(token, '204e578cb402302375f61c6408af4602301961791b92b3849104027900ba39c8e49153d17de32e108140283cfe6af14c', (error, data) => {
        if (error) {
            return res.status(403).json({ success: false, message: 'Not Authorized.' });
        }

        next();
    });
};

module.exports = middleware;