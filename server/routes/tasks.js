const express = require('express');
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks');
const router = express.Router();
const cors = require('cors');
const apiAuth = require('../middlewares/apiAuth');


router.use('/', cors({origin: 'http://localhost:3000'}))
router.use((req, res, next) => {
    console.log(`apply this middleware for all methods`, req.method);
     next(); 
 });
router.get(apiAuth); // apply auth middleware to GET only

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router