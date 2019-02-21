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
    // console.log(id);
    const user = await User.findById(id.userid).select('-hash');
    return user;
}
async function getAll() {
    return await User.find().select('-hash');
}
async function register({user_name, email, password ,fname, lname},res) {
    

        const hash = bcrypt.hashSync(password, 10, (err) => {
            console.log(err);
        });
        
        const u = new User({user_name, email, hash, fname, lname});
        
        u.save((err) => {
            const currentUser = new Userinfo({"userid": u._id,"display_name": user_name,"website": "", "profile_pic": "https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profiles%2Fdownload.png?alt=media&token=55b2f2e5-aec4-4819-9a10-ae9315a4cb1d", "bio": "Hi! I am using SWA.", "interests": "", "cover_image": "https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profile%2F9aaded4a-e6ac-407d-9523.jpg?alt=media&token=4ce6ecdc-bd12-45b5-b610-851c4f00e928", "mobile": "", "dob": "", "address": ""});    
            if(!err) {
                currentUser.save((error => {
                    if(!error) {
                        res.json(u);
                    }
                    else {
                        console.log(error);
                    }
                    
                }))
                
             
            }
            else {
                res.send("Error Registering user");
            }
        });
}
async function getUserInfo(body) {
    
    const uinfo = await Userinfo.findOne({"userid": body.userid});
    
    return uinfo;
}