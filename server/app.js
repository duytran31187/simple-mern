require('dotenv').config(); //  dotenv to read env variables
const connectDb = require('./db/connect');
const express = require('express');
const cors = require('cors')
const app = express();
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const apiAuth = require('./middlewares/apiAuth');
const debugRequest = require('./middlewares/debugRequest');

// const fs = require('fs');


app.use(express.json()); // [MIDDLEWARE] This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// app.use(cors({ // ref: https://expressjs.com/en/resources/middleware/cors.html
//     origin: 'http://localhost:3000'
// }));
// const logger = (req, res, next) => {
//     console.log(`hit server ${req.url}`);
//     next();
// }
// app.use([logger]);
// express.static
app.use(
    '/', // go to http://localhost:5001/
    express.static('public') // then render html file in public
);
// ROUTES --------------------------
// app.get('/', ((req, res) => { // HOMEPAGE
//     console.log('home page');
//     res.send('Home page')
// }))
app.use(debugRequest); // apply debugRequest middleware to all  
// route to users
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.post('/api/auth', (req, res) => {
 // authenticate user
});


app.use(notFound); // [MIDDLEWARE] if we put before route handlers, it will throws error always
app.use(errorHandler); // [MIDDLEWARE] error handler

const start = async () => {
    const PORT = process.env.PORT || 5000;
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(PORT, console.log(`listening on port ${PORT}`));
        
    } catch (error) {
        console.log(`[db] err ${error}`);
    }
}
start();
