const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const User = db.users;
const Userinfo = db.userinfo;
const SocialUser = db.socialUser;

module.exports = {
    authenticate,
    socialAuthenticate,
    getAll,
    getById,
    register,
    getUserInfo,
    getUserByUid,
    getUserByEmail,
    addUserInfo,
    getSocialById
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
async function register({user_name, email, password,cpassword ,fname, lname, socialUser},res) {
    
    console.log({user_name, email, password ,cpassword,fname, lname, socialUser});
        const hash = bcrypt.hashSync(password, 10, (err) => {
            console.log(err);
        })
        console.log(hash);
        const u = new User({user_name, email, hash, fname, lname});                        
        u.save((err) => {
            const currentUser = new Userinfo({"userid": u._id,"user_name": user_name,"website": "", "profile_pic": "https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profiles%2Fdownload.png?alt=media&token=55b2f2e5-aec4-4819-9a10-ae9315a4cb1d", "bio": "Hi! I am using SWA.", "interests": "", "cover_image": "https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profile%2F9aaded4a-e6ac-407d-9523.jpg?alt=media&token=4ce6ecdc-bd12-45b5-b610-851c4f00e928", "mobile": "", "dob": "", "address": "", "isVerified": false, "socialUser": socialUser});    
            if(!err) {
                currentUser.save((error => {
                    if(!error) {
                        // console.log('New User Added!'+ user_name);
                        res.json(u);
                        
                    }
                    else {
                        console.log(error);
                    }
                    
                }))
            }
            else {
                res.status(200).json({ error: "Error Registering user"});
            }
        });
}

async function getUserInfo(body) {
    console.log(body);
    const uinfo = await Userinfo.findOne({userid: body.userID});
    
    return uinfo;
}
async function getUserByUid(body) {
    
    const u = await User.find({user_name: body.userid});    
    return u;
}
async function getUserByEmail({email}) {
    
    const u = await User.find({email: email});   
    console.log(u);
    return u;
}
async function addUserInfo(model) {
    console.log(model);
    // const currentUser = new Userinfo({"userid": model.userid,"display_name": model.user_name,"website": model.website, "profile_pic": model.profile_pic, "bio": "Hi! I am using SWA.", "interests": model.interests, "cover_image": model.cover_image, "mobile": model.mobile, "dob": model.dob, "address": model.address, "isVerified": false});    
    // currentUser.save((err) => {
    //     if(err) {
    //         console.log('Error registering user');            
    //     }
    // })
}
async function getSocialById(user) {
    
   if(user) {
       const socialUser = await SocialUser.findOne({socialUserId: user.socialUserId});
       return socialUser;
   } 
   return {error: "Could not find user!"};
    
}
async function socialAuthenticate(social) {
    console.log(social);
    

    if(social) {
        const user = await SocialUser.find({_id: social.socialUserId});
        
        const token = user.generateJwt();
        user.token = token;        
        return user.toObject();
    } 
        
        // return {error: "Could not find user!"};
}