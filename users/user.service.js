const config = require('../myconfig.json');
const jwt_token = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const users = db.users;

module.exports = {
    authenticate,
    getAll,
    getById
};
async  function authenticate({user_name, password}) {

    const user = await users.findOne({user_name});
    if (user && bcrypt.compareSync(password, user.hash)) {  
        
       const {hash, ...userss} = user.toObject();
       console.log({hash, ...userss});
       const token = jwt_token.sign({sub: user.id},config.secret);
               return  {...userss, token };
    }    
    
}

async function getById(id) {
    return await users.findById(id).select('-hash');
}
async function getAll() {
    return await users.find().select('-hash');
}