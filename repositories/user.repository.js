const user = require('../models/user.model.js');

const repository = {};

repository.updateUser = (id, data) => {
    return user.findOneAndUpdate(id, data);
};
repository.getUser = (id) => {
    return user.findById(id).lean();
};
repository.deleteUser = (id) => {
    return user.findOneAndRemove(id);
};
repository.registerUser = () => {
    return user.find({}).lean();
};

repository.loginUser = ({ username, password }) => {
    if (user.find({ username: username, password: password })) {
        return user.find({ username: username, password: password }).lean();
    } else {
        return console.error("Incorrect information");
    }
};
module.exports = repository;