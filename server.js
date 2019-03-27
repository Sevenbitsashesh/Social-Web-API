require('rootpath')();
const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
// const path = require('path');
app.use(cors({ origin: false }));

const bodyParser = require('body-parser');
const jwt = require('./_helper/jwt');
const errorHandler = require('./_helper/error-handler');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(jwt());

// app.use(session({secret: 'work-hard', resave: true, saveUninitialized: true}));
// app.get('/',function checkSession(req,res,next) {    
    
//     // console.log(Date.now());
// });

app.use('/interests', require('./controllers/interests.controller'));
app.use('/users', require('./controllers/user.controller'));
app.use('/tweets', require('./controllers/tweet.controller'));


app.use(function (err, req, res, next) {
    
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });
// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});




