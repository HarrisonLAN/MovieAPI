const asyncHandler = (fn) => async (request, response, next) => {
    fn(request, response, next).catch(next);
};

module.exports = asyncHandler;