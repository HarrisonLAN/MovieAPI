const config = require('../config');
const JWT = require('jsonwebtoken');
const middleware = {};

middleware.protected = (req, res, next) => {
    const token = req.headers.authorization;
    var stringArray = token.split(" ");
    JWT.verify(stringArray[1], config.JWTTOKEN, (err, verifiedJwt) => {
        if(err){
          res.send(err.message)
        }else{
          res.send(verifiedJwt)
        }
      })
};

middleware.generateAccessToken = async (req, res) => {
    return JWT.sign({username: req}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

module.exports = middleware;