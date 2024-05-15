const debugRequest = (req, res, next) => {
    console.log(`req %o`, {
        baseUrl: req.baseUrl,
        hostname: req.hostname,
        originalUrl: req.originalUrl,
        method: req.method,
        path: req.path,
        query: req.query,
        params: req.params,
        body: req.body,
        // app: req.app
    });
    // console.log(`res %o`, {
    //     app: res.app
    // });
    next();
};
module.exports = debugRequest;  