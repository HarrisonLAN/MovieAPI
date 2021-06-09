const repository = require('../repositories/user.repository');
const controller = {};

controller.login = async (req, res) => {
    const { username, password } = req.body;
    const login = await repository.login({ username, password });

    res.json({ success: true, login });
};

controller.register = async (req, res) => {
    const payload = req.body;
    const newAccount = await repository.register(payload);

    res.json({ success: true, newAccount });
};

module.exports = controller;