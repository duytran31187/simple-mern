const express = require('express');
const router = express.Router();
const {getAllUsers, createUser, updateUser, getUser, deleteUser, getUserByEmail, getUserByPassword} = require('../controllers/users');
const debugRequest = require('../middlewares/debugRequest');

router.route('/')
 .get(getAllUsers)
 .post(createUser);
 router.route('/:id([a-z0-9]{24})') // remove (\[a-z0-9]{24}), then id can be anything
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

router.route('/:email([a-z0-9]+@[a-z0-9]+.[a-z0-9]+)')
    .get(getUserByEmail)
router.route('/password/:password')
    .get(getUserByPassword)        

module.exports = router;