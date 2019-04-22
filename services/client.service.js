const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const mailService = require('../services/mail.service');
const Client = db.client;
const User = db.users;
const UserInfo = db.userinfo;

module.exports = {
    getclientAll,
    addClientUser,
    getMyClient
}
async function getclientAll() {
    return Client.find();
}
async function addClientUser({fname, lname, email, trainerid, client_goal, client_level, client_measurement,  client_workplan, client_mealplan},res) {
    const pass = Math.random().toString(32);
console.log(pass);
    const h = bcrypt.hashSync(pass, 10, (err) => {
        console.log(err);
    })
    
    const u = new User({user_name: email, email, hash: h, fname, lname, role: "Client"});                        
    u.save((err) => {
        const currentUser = new UserInfo({"userid": u._id,"user_name": email,"website": "", "profile_pic": "https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profiles%2Fdownload.png?alt=media&token=55b2f2e5-aec4-4819-9a10-ae9315a4cb1d", "bio": "Hi! I am using SWA.", "interests": "", "cover_image": "https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profile%2F9aaded4a-e6ac-407d-9523.jpg?alt=media&token=4ce6ecdc-bd12-45b5-b610-851c4f00e928", "mobile": "", "dob": "", "address": "", "isVerified": false});    
        if(!err) {
            currentUser.save((error => {
                if(!error) {
                    // console.log('New User Added!'+ user_name);
                    // res.json(u);
                    const clientInfo = new Client({"trainerid": trainerid, "client_name": fname +' '+ lname, "email": email, "client_goal": client_goal, "client_level": client_level,"client_measurement": client_measurement, "client_workplan": client_workplan, "client_mealplan": client_mealplan})
                    clientInfo.save((errClient => {
                        console.log(errClient);
                        if(!errClient) {
                            // mailService.sendMail({ email,pass,fname, lname, trainerid});
                            res.json(u);
                        }
                        else {
                            res.json({error: "Can not add Client Info"});
                            console.log(errClient);
                        }
                    }))
                }
                else {
                    console.log(error);
                }
                
            }))
        }
        else {
            console.log(err);
            res.status(200).json({ error: "Error Registering user"});
        }
    });
    
    
}

async function getMyClient(myid) {
    console.log(myid);
    return Client.find({trainerid: myid});
}