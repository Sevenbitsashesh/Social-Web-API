const config = require('../myconfig.json');
const mongoose = require('mongoose',{useCreateIndex: true});
mongoose.connect(process.env.MONGODB_URI || config.connectionString,{useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = {
    users: require('../users/user.model')
};