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
repository.registerUser = (payload) => {
    try {
        return user.create(payload);
    } catch (error) {
        //console.log(error)
        return (error);
    }
};

repository.loginUser = ({ name, password }) => {
    return user.findOne({ name: name, password: password })
};
module.exports = repository;