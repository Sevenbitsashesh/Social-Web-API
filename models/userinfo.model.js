const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
const config = require('../myconfig.json');
const userInfo = new Schema({
    userid: {type: String, unique: true, required: true},
    display_name: { type: String, required: true },
    website: { type: String, required: true },
    profile_pic: { type: String, required: true },
    bio: { type: String, required: true },
    interests: { type: String, required: true },
    cover_image: { type: String, required: true },
    mobile: {type: String},
    dob: {type: String},
    address: {type: String}
});

userInfo.set('toJSON',{virtuals: true});
var UserInfo = mongoose.model('UserInfo', userInfo,'userinfo');
module.exports = UserInfo;