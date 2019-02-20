const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const User = db.users;
const Userinfo = db.userinfo;


module.exports = {
    authenticate,
    getAll,
    getById,
    register,
    getUserInfo
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
    console.log(id);
    const user = await User.findById(id.publicid).select('-hash');
    return user;
}
async function getAll() {
    return await User.find().select('-hash');
}
async function register({user_name, email, password ,fname, lname},res) {
    

        const hash = bcrypt.hashSync(password, 10, (err) => {
            console.log(err);
        })
        
        const u = new User({user_name, email, hash, fname, lname});
        u.save((err) => {
            
            if(!err) {
                console.log(u);
             res.json(u);
            }
            else {
                res.send("Error Registering user");
            }
        });
}
async function getUserInfo(body) {
    console.log(body);
    const uinfo = await Userinfo.findOne(body.userid).select('-hash');
    return uinfo;
}