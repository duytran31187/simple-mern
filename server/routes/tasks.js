const express = require('express');
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks');
const router = express.Router();
const cors = require('cors');


router.route('/').get(getAllTasks).post(createTask, cors({origin: 'http://localhost:3000'}))
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router