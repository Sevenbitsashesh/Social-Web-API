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
async  function authenticate({email, password}) {

    const user = await users.findOne({email});
    if (user && bcrypt.compareSync(password, user.hash)) {  
        
       const {hash, ...userss} = user.toObject();
       console.log({hash, ...userss});
       const token = jwt_token.sign({sub: user.id},config.secret);
               return  {...userss, token };
    }    
    
}
async function createUser({user_name, password, cpassword}) {

}
async function getById(id) {
    return await users.findById(id).select('-hash');
}
async function getAll() {
    return await users.find().select('-hash');
}