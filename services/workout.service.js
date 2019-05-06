const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const Workout = db.workout;

module.exports = {
    getworkoutAll,
    addWorkout,
    getMyWorkout,
    getMyWorkoutPlan
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
async function getMyWorkout(myid) {
    return Workout.find({userid: myid});
}

// Client Service
async function getMyWorkoutPlan(workoutid) {
    console.log(workoutid)
return Workout.find({_id: workoutid});
}