const middleware = require('../middlewares/auth');
const repository = require('../repositories/user.repository');
const controller = {};

controller.login = async (req, res) => {
    const { username, password } = req.body;
    const login = await repository.loginUser({ username, password });
    const token = await middleware.generateAccessToken(username);
    res.cookie("refreshToken", token, {
        httpOnly: true,
        sameSite: "strict",
});
    //res.json({ success: true, login, token});
};

controller.register = async (req, res) => {
    const payload = req.body;
    const newAccount = await repository.registerUser(payload);
    const token = middleware.generateAccessToken(req.body.username);
    res.json({ success: true, newAccount });
};

module.exports = controller;