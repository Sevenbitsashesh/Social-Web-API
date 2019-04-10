const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
// const config = require('../myconfig.json');
const workSchema = new Schema({
    work_name: {type: String, required: true},
    userid: { type: String, required: true },
    work_pic: { type: String, required: false },
    work_days: { type: Array, required: true },
    exe_desc: { type: String, required: false },
    exe_muscle: {type: String, required: true},
    // exe_create: { type: String, required: true },
    // exe_updated: { type: String, required: true },
});
// class exeSet  {
    
//      type;
//         set: String;
//         repetitions: String;
//         weight: String;
//         muscle: String;
    
    
// }
workSchema.set('toJSON', { virtuals: true });

var Workout = mongoose.model('Workout', workSchema,'workout_plans');

module.exports = Workout;

