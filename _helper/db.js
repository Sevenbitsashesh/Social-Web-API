const config = require('../myconfig.json');
const mongoose = require('mongoose',{useCreateIndex: true});
mongoose.connect(process.env.MONGODB_URI || config.connectionString,{useNewUrlParser: true});
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
    users: require('../models/user.model'),
    userinfo: require('../models/userinfo.model'),
    socialUser: require('../models/socialuser.model'),
    interests: require('../models/interests.model'),
    exercise: require('../models/exercise.model'),
    workout: require('../models/workout.model'),
    meal: require('../models/meal.model'),
    client: require('../models/client.model'),
    muscle: require('../models/muscles.model'),
};
