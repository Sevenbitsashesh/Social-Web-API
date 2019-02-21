const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
const config = require('../myconfig.json');
const userInfo = new Schema({
    userid: {type: String, unique: true, required: true},
    display_name: { type: String, required: true },
    website: { type: String, required: false },
    profile_pic: { type: String, required: false },
    bio: { type: String, required: false },
    interests: { type: String, required: false },
    cover_image: { type: String, required: false },
    mobile: {type: String},
    dob: {type: Date},
    address: {type: String}
});

userInfo.set('toJSON',{virtuals: true});
var UserInfo = mongoose.model('UserInfo', userInfo,'userinfo');
module.exports = UserInfo;