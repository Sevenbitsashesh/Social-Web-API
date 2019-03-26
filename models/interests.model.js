const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const interestsSchema = new Schema({
    name: {type: String, required: true}
});


interestsSchema.set('toJSON', { virtuals: true });


var interests = mongoose.model('Interests', interestsSchema,'interests');

module.exports = interests;