const { CustomError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        console.log(`errorHandler send error ${err}`);
        return res.status(err.statusCode).send(err.message);
    }
    return res.status(500).json({ msg: 'Something went wrong, please try again' });
};

module.exports = errorHandler;