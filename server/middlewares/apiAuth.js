const { Buffer } = require('node:buffer');
const API_KEY = 'x-api-key';
const VALID_API_KEY = '123456';
const VALID_USER = 'admin';
const VALID_PWD = 'pwd';

const apiAuth = (req, res, next) => {
    console.log(`api auth`, req.header(API_KEY));
    //validate use api-key
    if (req.header(API_KEY) == VALID_API_KEY) {// if contain valid api key
        console.log(`validated`);
        return next();
    }
    // validate with basic auth

    // check for basic auth header
    // console.log(`req.headers.authorization`, req.headers.authorization);
    // if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    //     return res.status(401).json({ message: 'Missing Authorization Header' });
    // }

    // // verify auth credentials
    // header will contains: 'Basic asdfaqw'
    if ( req.headers.authorization && req.headers.authorization.indexOf('Basic ') !== -1) {
        const base64Credentials =  req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        if (username == VALID_USER && password == VALID_PWD) {
            return next();
        }
    }
    return res.status(401).json({message: 'You are not allowed to access this resource'});
    
};
module.exports = apiAuth;