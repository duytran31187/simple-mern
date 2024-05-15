const {createCustomError} = require('../errors/custom-error');
const {UserModel} = require('../models/User');

const getAllUsers = async (req, res) => {
    const users = await UserModel.find({});
    // console.dir(users);
    res.status(200).send(users);
};

const createUser = async (req, res) => {
    const newUser = await UserModel.create(req.body);
    res.status(201).send(newUser);
};

const updateUser = async (req, res, next) => {
    const {id: userId} = req.params;
    const user = await UserModel.findOneAndUpdate(
        {_id: userId},
        {
            email: req.body.email,
            name: req.body.name
        }
    );
    if (!user) {
        next(createCustomError(404,  `no user found with id  ${userId}`));
    }
    res.status(200).json({ user })
}

const getUser = async (req, res, next) => {
    const {id: userId} = req.params;
    const user = await UserModel.findOne({_id: userId});
    if (!user) {
        const customErrorIns = createCustomError(404,  `no user found with provided ID  ${userId}`);
        next(customErrorIns);
    } else {
        res.status(200).send(user);
    }
}
const getUserByEmail = async (req, res, next) => {
    const {email} = req.params;
    const user = await UserModel.findByEmail(email);
    // or use by query
    // const user = await UserModel.find().byEmail(email);
    if (!user) {
        const customErrorIns = createCustomError(404,  `no user found with provided email  ${email}`);
        next(customErrorIns);
    } else {
        res.status(200).send(user);
    }
}
const getUserByPassword = async (req, res, next) => {
    const {password} = req.params;
    const user = await UserModel.findByPassword(password);
    if (!user) {
        const customErrorIns = createCustomError(404,  `no user found with provided password  ${password}`);
        next(customErrorIns);
    } else {
        res.status(200).send(user);
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    const result = await UserModel.deleteOne({_id: id});
    res.status(200).send(`delete User successfully ${result}`);
}

module.exports = { getAllUsers, createUser, updateUser, getUser, deleteUser, getUserByEmail, getUserByPassword }