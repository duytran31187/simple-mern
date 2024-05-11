const asyncWrapper = require('../middlewares/async')
const TaskModel = require('../models/Task');
const {createCustomError} = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
    // it will filter only fields defined in schema only.
    const tasks = await TaskModel.find({});
    res.status(200).json( tasks );
});

const createTask = asyncWrapper(async (req, res) => {
    // it will filter only fields defined in schema only.
    const task = await TaskModel.create(req.body);
    res.status(201).json({ task });

});

const getTask = async (req, res, next) => {
    // https://expressjs.com/en/guide/error-handling.html
    try {
        const {id: taskID} = req.params;
        const task = await TaskModel.findOne({_id: taskID});
        if (!task) {
            next(createCustomError(404,  `no task found with provided ID  ${taskID}`));
        } else {
            res.status(200).json({task});
        }
    } catch (error) {
        next({error});  // Pass errors to Express.
    }
}

const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await TaskModel.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
})
const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params

    const task = await TaskModel.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })

    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }

    res.status(200).json({ task })
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}