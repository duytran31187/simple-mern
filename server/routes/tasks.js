const express = require('express');
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks');
const router = express.Router();
const cors = require('cors');
const apiAuth = require('../middlewares/apiAuth');


router.use('/', cors({origin: 'http://localhost:3000'})) // apply cors for all methods
// apply apiAuth middleware for case
// case 1: for all methods
// router.use(apiAuth); // apply to this path with all methods
// case 2: for only GET method
router.get('/', apiAuth); // apply auth middleware to GET only
// use inline middleware for all method
router.use('/',(req, res, next) => {
    console.log(`apply this middleware for all methods`, req.method);
     next(); 
 });
// route define
router.route('/')
    .get(getAllTasks) // with this route and method = GET
    .post(createTask); // with this route and method POST

router.route('/:id')
    .get(getTask)
    .patch(updateTask)
    .delete(deleteTask)

module.exports = router