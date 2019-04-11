const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const Meal = db.meal;

module.exports = {
    getmealAll,
    addMeal,
    getMymeal
}
async function getmealAll() {
    return Meal.find();
}
async function addMeal(mealModel) {
    const newMeal = new Meal(mealModel);
    // console.log(newWork);
    return newMeal.save();
    
}
async function getMymeal(myid) {
    return Meal.find({userid: myid});
}