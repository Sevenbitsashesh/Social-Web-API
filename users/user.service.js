const config = require('../myconfig.json');
const jwt_token = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const users = db.users;

module.exports = {
    authenticate,
    getAll
};
async  function authenticate({user_name, password}) {
    
    const user = await users.findOne({ user_name });
    // user[0].then(function (doc) {console.log(doc)});
    
    
    if (user && bcrypt.compareSync(password, user.hash)) {
        console.log(user.hash);
        const { user_name } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        // const token = 'token';
        return {
                user_name,
                token
        };
    }    
}

async function getById(id) {
    return await users.findById(id).select('-hash');
}
async function getAll() {
    return await users.find().select('-hash');
}