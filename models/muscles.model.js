const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
// const config = require('../myconfig.json');
const muscleSchema = new Schema ({
    muscle_type: {type: String, required: true},
    
  
});


muscleSchema.set('toJSON', { virtuals: true });

var Muscle = mongoose.model('Muscle', muscleSchema,'exercise_muscles');

module.exports = Muscle;

