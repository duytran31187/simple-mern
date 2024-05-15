const debugRequest = (req, res, next) => {
    console.log(`url %o`, {
        baseUrl: req.baseUrl,
        method: req.method,
        path: req.path,
        query: req.query,
        params: req.params,
        body: req.body
    });
    next();
};
module.exports = debugRequest;  