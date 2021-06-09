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
module.exports = repository;