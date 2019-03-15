const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
const config = require('../myconfig.json');
const userInfo = new Schema({
    userid: {type: String, unique: true, required: true},
    user_name: { type: String, required: true },
    website: { type: String, required: false },
    profile_pic: { type: String, required: false },
    bio: { type: String, required: false },
    interests: { type: String, required: false },
    cover_image: { type: String, required: false },
    mobile: {type: String},
    dob: {type: Date},
    address: {type: String},
    socialUser: {type: Boolean}
});


userInfo.methods.generateJwt = function(data) {
    var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return jwt_token.sign({id: this._id, email: this.email, exp: parseInt(expiry.getTime() / 1000),
  },config.secret);
}

userInfo.set('toJSON',{virtuals: true});
var UserInfo = mongoose.model('UserInfo', userInfo,'userinfo');
module.exports = UserInfo;