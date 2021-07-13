const repository = require('../repositories/movies.repository');
const controller = {};
const handler = require('../middlewares/err.handler')

controller.getAllMovies = async (req, res, next) => {
    const movies = await repository.getAllMovies();
    res.json({ success: true, movies });

};

controller.getMovieById = async (req, res) => {
    const { id } = req.params;
    const movies = await repository.getMovieById(id);

    res.json({ success: true, movies });
};

controller.getDescMovieRatings = async (req, res) => {
    const movies = await repository.sortOnRating();
    res.json({ success: true, movies });
};


module.exports = controller;