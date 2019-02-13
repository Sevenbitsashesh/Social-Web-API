const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    // firstName: { type: String, required: true },
    // lastName: { type: String, required: true },
    // createdDate: { type: Date, default: Date.now },
    // email: {type: String, required: true},
    
    // gender: {type: String, required: true},
    // mobile: {type: Number, required: false},
    // profile_pic: {type: String,required: false},
    // dob: {type: Date, required: false},
    // address: {type: String, required: true},
    // bio: {type: String, required: false},
    // status: {type: Boolean, required: false}
});

userSchema.set('toJSON', { virtuals: true });
// userSchema.set('collection','users');


var User = mongoose.model('User', userSchema,'users')
module.exports = User;
// mongoose.model('User', userSchema,'users');