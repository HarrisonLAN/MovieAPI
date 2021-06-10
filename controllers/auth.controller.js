const middleware = require('../middlewares/auth');
const repository = require('../repositories/user.repository');
const controller = {};

controller.login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    const login = await repository.loginUser({ username, password });
    //const token = middleware.generateAccessToken(req);
    res.json({ success: true, login });
};

controller.register = async (req, res) => {
    const payload = req.body;
    const newAccount = await repository.registerUser(payload);
    //const token = middleware.generateAccessToken({ username: req.body.username });
    res.json({ success: true, newAccount });
};

module.exports = controller;