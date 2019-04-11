const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
// const config = require('../myconfig.json');
const mealSchema = new Schema({
    meal_name: {type: String, required: true},
    userid: { type: String, required: true },
    meal_pic: { type: String, required: false },
    eat_items: { type: Array, required: true },
    avoid_items: { type: Array, required: true },
    follow_up: {type: Number, required: true}
    // exe_create: { type: String, required: true },
    // exe_updated: { type: String, required: true },
});

mealSchema.set('toJSON', { virtuals: true });

var Meal = mongoose.model('Meal', mealSchema,'meal_plans');

module.exports = Meal;

