require('dotenv').config(); //  dotenv to read env variables
const connectDb = require('./db/connect');
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');


app.use(express.json()); // without this, we will not have data in req.body
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
