const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const Workout = db.workout;

module.exports = {
    getworkoutAll,
    addWorkout,
    getMyWorkouts,
    getMyWorkoutPlan,
    getMyWorkout
}
// Trainer Service

async function getworkoutAll() {
    return Workout.find();
}
async function addWorkout(exeModel) {
    const newWork = new Workout(exeModel);
    // console.log(newWork);
    return newWork.save();
    
}
async function getMyWorkouts(myid) {
    return Workout.find({userid: myid});
}
async function getMyWorkout(workid) {
    return Workout.find({_id: workid});
}

// Client Service
async function getMyWorkoutPlan(workoutid) {
    console.log(workoutid)
return Workout.find({_id: workoutid});
}