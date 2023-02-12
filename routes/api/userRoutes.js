const router = require('express').Router();

const {
    createUser,
    getUsers,
    getSingleUser,
    deleteUser,
    updateUser,
} = require('../../controllers/userController');

router
    .route('/')
    .post(createUser)
    .get(getUsers);
    
router
    .route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;