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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(jwt());

// app.use(session({secret: 'work-hard', resave: true, saveUninitialized: true}));
// app.get('/',function checkSession(req,res,next) {    
    
//     // console.log(Date.now());
// });
app.use('/users', require('./controllers/user.controller'));
app.use('/tweets', require('./controllers/tweet.controller'));

app.use(errorHandler);
// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});



