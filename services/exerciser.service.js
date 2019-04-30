const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const Exercise = db.exercise;
const Muscle = db.muscle;
module.exports = {
    getexerciseAll,
    addExercise,
    getMyExercise,
    getMuscles
}
async function getexerciseAll() {
    return Exercise.find();
}
async function addExercise(exeModel) {
    const newExe = new Exercise(exeModel);
    return newExe.save();
}
async function getMyExercise(myid) {
    return Exercise.find({userid: myid});
}
async function getMuscles() {
    return Muscle.find();
}