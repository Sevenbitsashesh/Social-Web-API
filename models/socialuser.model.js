const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt_token = require('jsonwebtoken');
const config = require('../myconfig.json');
const socialUserSchema = new Schema({
    providerName: {type: String, required: true},
    accessToken: { type: String, unique: true, required: true },
    expiresIn: { type: String, required: true },
    status: { type: String, required: true },
    session_key: { type: String, required: true },
    first_name: {type: String,required: false}, 
    last_name: {type: String,required: false}, 
    token: {type: String,required: false}, 
    email: {type: String, required: false}
});

socialUserSchema.set('toJSON', { virtuals: true });

socialUserSchema.methods.generateJwt = function(data) {
    
    var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return jwt_token.sign({id: data.userid, email: this.email, exp: parseInt(expiry.getTime() / 1000),
  },config.secret);
}


var SocialUser = mongoose.model('SocialUser', socialUserSchema,'socialUser');

module.exports = SocialUser;