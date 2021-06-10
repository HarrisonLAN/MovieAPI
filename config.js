const dotenv = require('dotenv');
dotenv.config();
var config = {};

config.DB_Connection = process.env.DB_Connection;
config.PORT = process.env.PORT;
config.JWTTOKEN = process.env.TOKEN_SECRET;

module.exports = config;