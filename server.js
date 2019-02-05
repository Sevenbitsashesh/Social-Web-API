const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors({ origin: true }));
// require('rootpath')();
const bodyParser = require('body-parser');
const jwt = require('./_helper/jwt');
const errorHandler = require('./_helper/error-handler');
app.use(errorHandler);

app.use(jwt());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', require('./users/user.controller'));

app.post('/', on => {
    console.log('welcome guest');
})


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});



