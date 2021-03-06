const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const Exercise = db.exercise;
const Muscle = db.muscle;
module.exports = {
    getexerciseAll,
    addExercise,
    getMyExercise,
    getMuscles,
    getExercise
}
async function getexerciseAll() {
    return Exercise.find();
}
async function addExercise(exeModel) {
    // console.log(exeModel.split('')
    console.log(exeModel);
    const newExe = new Exercise(exeModel);
    return newExe.save();
}
async function getMyExercise(myid) {
    return Exercise.find({userid: myid});
}
async function getMuscles() {
    return Muscle.find();
}
async function getExercise(data) {
    console.log(data);
    return Exercise.find(data);
}