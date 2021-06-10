const config = require('../config');
const JWT = require('jsonwebtoken');
const middleware = {};

middleware.protected = (req, res, next) => {
    const token = req.headers.token;

    if (token == null) return res.sendStatus(401)

    JWT.verify(token, config.JWTTOKEN, (error, data) => {
        if (token == null) return res.sendStatus(401)
        if (error) {
            return res.status(403).json({ success: false, message: 'Not Authorized.' });
        }

        next();
    });
};

middleware.generateAccessToken = async (req, res) => {
    const { username } = req.body;
    return JWT.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

module.exports = middleware;