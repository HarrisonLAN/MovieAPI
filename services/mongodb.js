const config = require("../config");
const mongoose = require('mongoose');
mongoose.connect(config.DB_Connection, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
    },
    err => { console.log(err); }
)
mongoose.createConnection;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'conneciton error'));
module.exports = { db };