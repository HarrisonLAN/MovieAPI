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
    return user.create(payload).lean();
};

repository.loginUser = ({ username, password }) => {
    return user.findOne({name: username,password:password})
};
module.exports = repository;