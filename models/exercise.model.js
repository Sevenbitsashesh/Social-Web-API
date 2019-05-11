const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
// const config = require('../myconfig.json');
const exeSchema = new Schema({
    exe_name: {type: String, required: true},
    userid: { type: String, required: true },
    exe_pic: { type: String, required: false },
    // exe_type: { type: String, required: true },
    exe_desc: { type: String, required: false },
    exe_muscle: {type: String, required: true},
    sec_exe_muscle: {type: Array, required: true},
    // exe_create: { type: String, required: true },
    // exe_updated: { type: String, required: true },
});

exeSchema.set('toJSON', { virtuals: true });

var Exercise = mongoose.model('Exercise', exeSchema,'exercises');

module.exports = Exercise;

