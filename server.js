const config = require("./config.js");
const database = require('./mongodb');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api", routes)

database.db.once('open', () => start());

const start = () => {
    app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}.`));
};
