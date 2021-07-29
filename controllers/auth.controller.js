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
    try{
    const newAccount = await repository.registerUser(payload);
    res.json({success:true});
    }catch(error){
        console.log(error);
        res.json({success:false})
    }

};

module.exports = controller;