const middleware = require('../middlewares/auth');
const repository = require('../repositories/user.repository');
const controller = {};

controller.login = async (req, res) => {
    const { name, password } = req.body;
    const user = await repository.loginUser({ name, password });
    delete user._doc.password
    const jwt = await middleware.generateAccessToken(user);
    res.json({ success: true, user, jwt });
};

controller.register = async (req, res) => {
    const payload = req.body;
    const newAccount = await repository.registerUser(payload);
    delete newAccount._doc.password
    const jwt = middleware.generateAccessToken(newAccount);
    res.json({ success: true, newAccount, jwt });
};

module.exports = controller;