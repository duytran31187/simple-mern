require('dotenv').config(); //  dotenv to read env variables
const connectDb = require('./db/connect');
const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const debugRequest = require('./middlewares/debugRequest');
const { UserModel } = require('./models/User');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
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
app.set('view engine', 'ejs'); // set the view engine to ejs, which is a templating engine and must be installed in the project
app.set('views', path.join(__dirname, 'views')); // set the views directory to the views folder

app.get('/admin/users', async(req,res, next) => {
    let users = await UserModel.find({});
    // users = foundUsers.map(user => {
    //     user.url = app.route('/admin/users/' + user._id);
    // });
    res.render('users', {users: users, userUrl: '/admin/users/'});
});
app.get('/admin/users/create', async(req,res) => {
    res.render('form', {user: null, message: null, adding: true});
});
app.get('/admin/users/:userId([a-z0-9]{24})', async(req,res) => {
    const {userId} = req.params;
    const user = await UserModel.findOne({_id: userId});
    console.log(JSON.stringify(user));  
    res.render('user-detail', {user});
});
app.post('/admin/users/save', async(req,res) => {
    
    console.log(`req data %o`, req.body);
    const newUser = new UserModel(req.body);
    console.log(newUser);
    try {
        await newUser.save();
        res.redirect('/admin/users/');
    } catch (err) {
        res.render('form', {user: null, message: err.message, adding: true});
    }
});

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
