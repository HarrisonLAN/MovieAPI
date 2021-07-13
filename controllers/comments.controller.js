const repository = require('../repositories/comments.repository');
const controller = {};

controller.getCommentsBasedOnMovie = async (req, res) => {
    const { id } = req.params;
    const comments = await repository.getAllCommentsBasedOnMovie(id);
    res.json({ success: true, comments });
};
module.exports = controller;