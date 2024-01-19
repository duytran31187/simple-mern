const { CustomError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send( '[middleware]'+err.message);
    }
    return res.status(500).json({ msg: '[middleware] something went wrong, please try again' });
};

module.exports = errorHandler;