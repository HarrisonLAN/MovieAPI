const repository = require('../repositories/user.repository');
const controller = {};

controller.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await repository.getUser(id);
    res.json({ success: true, user });
};

controller.updateUser = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const user = await repository.updateUser(id, payload);
    res.json({ success: true, user });
};
controller.deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await repository.deleteUser(id);
    res.json({ success: true, user });
};

module.exports = controller;