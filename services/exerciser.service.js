const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const Exercise = db.exercise;

module.exports = {
    getexerciseAll,
    addExercise,
    getMyExercise
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