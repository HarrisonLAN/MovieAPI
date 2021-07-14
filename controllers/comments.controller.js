const repository = require('../repositories/comments.repository');
const controller = {};

controller.getCommentsBasedOnMovie = async (req, res) => {
    const { id } = req.params;
    const comments = await repository.getAllCommentsBasedOnMovie(id);
    res.json({ success: true, comments });
};

controller.deleteComment = async (req, res) => {
    const { id } = req.params;
    repository.getAllCommentsBasedOnMovie(id);
    res.json({ success: true });
}
controller.postComment = async (req, res) => {
    const payload = req.body;
    const comments = await repository.postComment(payload);
    res.json({ success: true, comments });
};
module.exports = controller;