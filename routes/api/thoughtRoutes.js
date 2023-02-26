const router = require('express').Router();

const {
    createThought,
    getThoughts,
    getSingleThought,
    deleteThought,
    updateThought,
    addReaction,
    deleteReaction
    
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

router.route('/:thoughtId/reactions').post(addReaction)

router.route('/:thoughtId/:reactionId').delete(deleteReaction)

module.exports = router;