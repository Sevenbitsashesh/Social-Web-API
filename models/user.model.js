const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
const config = require('../myconfig.json');
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

userSchema.methods.generateJwt = function() {
    var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return jwt_token.sign({id: this._id, email: this.email, exp: parseInt(expiry.getTime() / 1000),
  },config.secret);
}

var User = mongoose.model('User', userSchema,'users');
module.exports = User;
// mongoose.model('User', userSchema,'users');