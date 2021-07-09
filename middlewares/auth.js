const config = require('../config');
const JWT = require('jsonwebtoken');
const middleware = {};

middleware.protected = (req, res, next) => {
  const token = req.headers.authorization;
  if (token == null) {
    res.send("Not Authorized");
  } else {
    var stringArray = token.split(" ");
    JWT.verify(stringArray[1], config.JWTTOKEN, (err, verifiedJwt) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(verifiedJwt)
      }
    })
  }
};


middleware.generateAccessToken = async (req, res) => {
  const { name, _id, email } = req;

  return JWT.sign({ name, _id, email }, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

module.exports = middleware;