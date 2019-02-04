const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors({ origin: true }));

// Set up mongoose connection
const mongoose = require('mongoose');
let social_db_url = 'mongodb://social-sevenbits:Seven123@ds221435.mlab.com:21435/social-app-db';
let mongoDB = process.env.MONGODB_URI || social_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.get(d => {
    
});



