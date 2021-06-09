const repository = require('../repositories/movies.repository');
const controller = {};

controller.getAllMovies = async (req, res) => {
    const movies = await repository.getAllMovies();

    res.json({ success: true, movies });
};

controller.getMovieById = async (req, res) => {
    const { id } = req.params;
    const movies = await repository.getMovieById(id);

    res.json({ success: true, movies });
};

module.exports = controller;