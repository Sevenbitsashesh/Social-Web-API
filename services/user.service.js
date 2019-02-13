const config = require('../myconfig.json');
const jwt_token = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const User = db.users;



module.exports = {
    authenticate,
    getAll,
    getById
};
async  function authenticate({email, password}) {

    const user = await User.findOne({email});
    if (user && bcrypt.compareSync(password, user.hash)) {  
        
       const {hash, ...userss} = user.toObject();
       
       const token = jwt_token.sign({sub: user.id},config.secret);
               return  {...userss, token };
    }    
    
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}
async function getAll() {
    return await User.find().select('-hash');
}