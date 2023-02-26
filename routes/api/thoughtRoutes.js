const router = require('express').Router();

const {
    createThought,
    getThoughts,
    getSingleThought,
    deleteThought,
    updateThought,
    
} = require('../../controllers/thoughtController');

router
    .route('/')
    .post(createThought)
    .get(getThoughts)
    

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .delete(deleteThought)
    .put(updateThought)

module.exports = router;