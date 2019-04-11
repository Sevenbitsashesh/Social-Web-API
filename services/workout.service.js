const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const Workout = db.workout;

module.exports = {
    getworkoutAll,
    addWorkout,
    getMyWorkout
}
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