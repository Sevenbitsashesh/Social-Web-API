const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
// const config = require('../myconfig.json');
const clientSchema = new Schema ({
    client_name: {type: String, required: true},
    trainerid: { type: String, required: true },
    client_goal: { type: String, required: true },
    client_level: { type: String, required: true },
    client_measurement: {type: Array, required: true},
    email: { type: String, required: true },
    client_workplan: { type: Array, required: true },
    // client_mealplan: { type: String, required: true },
    startFrom: {type: Date, required: true},
    clientinfoid: {type: String, required: true}
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

clientSchema.set('toJSON', { virtuals: true });

var Client = mongoose.model('Client', clientSchema,'clients');

module.exports = Client;

