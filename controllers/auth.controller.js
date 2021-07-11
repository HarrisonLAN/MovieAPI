const middleware = require('../middlewares/auth');
const repository = require('../repositories/user.repository');
const controller = {};

controller.login = async (req, res) => {
    const { name, password } = req.body;
    const login = await repository.loginUser({ name, password });
    delete login.password;
    const token = await middleware.generateAccessToken(login);
    res.json({ success: true, login, token });
};

controller.register = async (req, res) => {
    const payload = req.body;
    const newAccount = await repository.registerUser(payload);
    delete newAccount.password;
    const token = middleware.generateAccessToken(newAccount);
    res.json({ success: true, newAccount, token });
};

module.exports = controller;