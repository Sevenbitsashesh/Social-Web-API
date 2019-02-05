const config = require('../myconfig.json');
const jwt_token = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const User = db.User;

module.exports = {
    authenticate
};
async function authenticate({user_name}) {
    console.log(user_name);
}