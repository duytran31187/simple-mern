const users = [
    {
        id: 1,
        name: 'Duy',
        age: 30
    }
]
let countId = 2;

const getAllUsers = (req, res) => {
    console.dir(users);
    res.status(200).send(users);
};

const createUser = (req, res) => {
    countId++;
    // console.log(`create user with body ${JSON.stringify(req.body)}`);
    const newUser = {
        id: countId,
        ...req.body
    };
    console.dir(newUser);
    users.push(newUser);
    res.status(201).send(newUser);
};

const updateUser = (req, res) => {
    const {id} = req.params;
    const user = users.find(user => user.id == id);
    if (!user) {
        next(createCustomError(404,  `no user found with provided ID  ${taskID}`));
    } else {
        user.name = req.body.name;
        res.status(200).send(user);
    }
}

const getUser = (req, res) => {
    const {id} = req.params;
    const user = users.find(user => user.id == id);
    if (!user) {
        next(createCustomError(404,  `no user found with provided ID  ${taskID}`));
    } else {
        res.status(200).send(user);
    }
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    users.filter(user => user.id !== id);
    res.status(200).send('delete User successfully');
}

module.exports = { getAllUsers, createUser, updateUser, getUser, deleteUser }