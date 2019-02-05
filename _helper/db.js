const config = require('../myconfig.json');
const mongoose = require('mongoose',{useCreateIndex: true,useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI || config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};