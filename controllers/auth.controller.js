const middleware = require('../middlewares/auth');
const repository = require('../repositories/user.repository');
const controller = {};

controller.login = async (req, res) => {
    const { username, password } = req.body;
    const login = await repository.loginUser({ username, password });
    delete login.password;
    const token = await middleware.generateAccessToken(login);
    res.json({ success: true, login, token });
};

controller.register = async (req, res) => {
    const payload = req.body;
    const newAccount = await repository.registerUser(payload);
    const token = middleware.generateAccessToken(req.body);
    res.json({ success: true, newAccount, token });
};

module.exports = controller;