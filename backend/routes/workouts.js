const express = require('express')
const Workout = require('../models/WorkoutModel')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/WorkoutsController')

const router = express.Router()

//Get All workouts
router.get('/',getWorkouts)

// Get Single workout

router.get('/:id',getWorkout)

// Post Workout
router.post('/',createWorkout)

// Delete workout
router.delete('/:id',deleteWorkout)

// Update workout
router.patch('/:id',updateWorkout)

module.exports = router