require('rootpath')();
const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
// const path = require('path');
app.use(cors({ origin: true }));

const bodyParser = require('body-parser');
const jwt = require('./_helper/jwt');
const errorHandler = require('./_helper/error-handler');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(jwt());
// app.get('/exercises', jwt());



app.use('/interests',require('./controllers/interests.controller'));
app.use('/users', require('./controllers/user.controller'));
app.use('/exercise',require('./controllers/exercise.controller'));
app.use('/workout',require('./controllers/workout.controller'));
app.use('/meal',require('./controllers/meal.controller'));
app.use('/client',require('./controllers/client.controller'));
app.use('/mail',require('./controllers/mail.controller'));


app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});




