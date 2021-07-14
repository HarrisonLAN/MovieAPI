const repository = require('../repositories/movies.repository');
const controller = {};

controller.getAllMovies = async (req, res, next) => {
    try {
        const movies = await repository.getAllMovies();
        if (!movies) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ success: true, movies });
    } catch (err) {
        next(err);
    }
};

controller.getMovieById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const movies = await repository.getMovieById(id);
        if (!movies) {
            return res.status(400).json({ sucess: false });
        }
        res.status(200).json({ sucess: true, movies });
    } catch (err) {
        next(err);
    }
};

controller.getDescMovieRatings = async (req, res) => {
    const movies = await repository.sortOnRating();
    res.json({ success: true, movies });
};


module.exports = controller;