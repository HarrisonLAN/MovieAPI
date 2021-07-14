const config = require("./config.js");
const database = require('./services/mongodb');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();
const errorHandler = require('./middlewares/err.handler')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api", routes)
app.use(errorHandler);

database.db.once('open', () => start());

const start = () => {
    app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}.`));
};