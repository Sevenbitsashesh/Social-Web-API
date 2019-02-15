const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const User = db.users;



module.exports = {
    authenticate,
    getAll,
    getById,
    register
};
async  function authenticate({email, password}) {

    const user = await User.findOne({email});
    if (user && bcrypt.compareSync(password, user.hash)) {  
        
       const {hash, _id, ...userss} = user.toObject();
       const     token = user.generateJwt();
       
               return  {...userss, token };
    }    
    
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}
async function getAll() {
    return await User.find().select('-hash');
}
async function register({user_name, email, password, fname, lname}) {
    const hash = bcrypt.hashSync(password, 10);
    
    const u = new User({user_name, email, hash, fname, lname});
    
   
    return u.save();
   
    
}