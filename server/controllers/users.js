const users = [
    {
        id: 1,
        name: 'Duy',
        age: 30
    }
]
let countId = 2;

const getAllUsers = (req, res) => {
    console.log(`users ${users}`)
    res.send(users);
};

const createUser = (req, res) => {
    countId++;
    const newUser = {
        ...req.body,
        id: countId
    };
    users.push(newUser);
    res.send('created successfully');
};

const updateUser = (req, res) => {
    const {id} = req.params;
    const user = users.find(user => user.id == id);
    if (!user) {
        next(createCustomError(404,  `no user found with provided ID  ${taskID}`));
    } else {
        user.name = req.body.name;
        res.send(user);
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
    res.send('delete User successfully');
}

module.exports = { getAllUsers, createUser, updateUser, getUser, deleteUser }