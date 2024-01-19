require('dotenv').config(); //  dotenv to read env variables
const connectDb = require('./db/connect');
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

// console.log(`app locals ${JSON.stringify(app.locals)}`)
app.use(express.json()); //  This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// app.use(cors());
// const logger = (req, res, next) => {
//     console.log(`hit server ${req.url}`);
//     next();
// }
// app.use([logger]);

//routes
// home page
app.get('/', ((req, res) => {
    console.log('home page');
    res.send('Home page')
}))
// route to users
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);


app.use(notFound); // if we put before route handlers, it will throws error always
app.use(errorHandler);

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
