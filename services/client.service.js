const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const mailService = require('../services/mail.service');
const Client = db.client;
const User = db.users;
const UserInfo = db.userinfo;

module.exports = {
    getclientAll,
    addClientUser,
    getMyClient,
    getClient,
    getMyData,
    getMyClientById,
    updateAssessment,
    updateGoal,
    updateWorkout
}
async function getclientAll() {
    return Client.find();
}
// async function addClientUser({fname, lname, email, trainerid, client_goal, client_level, client_measurement, client_mealplan,workout_planid, weeks, dob, gender, clientinfoid},res) {
async function addClientUser({fname, lname, email, trainerid, client_goal, client_level, client_measurement, dob, gender, clientinfoid},res) {
    // const pass = Math.random().toString(32).slice(11);
    const pass = 'mypass123';
    let today = new Date();    
    const h = bcrypt.hashSync(pass, 10, (err) => {
        console.log(err);
    })
    console.log(pass);
    const u = new User({user_name: email, email, hash: h, fname, lname, role: "Client", password: pass});                        
    u.save((err) => {
        const currentUser = new UserInfo({"userid": u._id,"user_name": email,"website": "", "profile_pic": "https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profiles%2Fdownload.png?alt=media&token=55b2f2e5-aec4-4819-9a10-ae9315a4cb1d", "bio": "Hi! I am using SWA.", "interests": "", "cover_image": "https://firebasestorage.googleapis.com/v0/b/my-social-a5d83.appspot.com/o/profile%2F9aaded4a-e6ac-407d-9523.jpg?alt=media&token=4ce6ecdc-bd12-45b5-b610-851c4f00e928", "mobile": "", "dob": dob,"gender": gender, "address": "", "isVerified": false});    
        if(!err) {
            currentUser.save((error => {
                if(!error) {
                    // console.log('New User Added!'+ user_name);
                    // res.json(u);

                    // const clientInfo = new Client({"trainerid": trainerid, "client_name": fname +' '+ lname, "email": email, "client_goal": client_goal, "client_level": client_level,"client_measurement": client_measurement, "client_workplan": {workout_planid: workout_planid, weeks: weeks}, "client_mealplan": client_mealplan, "startFrom": today, clientinfoid:  currentUser._id});
                    const clientInfo = new Client({"trainerid": trainerid, "client_name": fname +' '+ lname, "email": email, "client_goal": client_goal, "client_level": client_level,"client_measurement": client_measurement,"client_workplan": {workout_planid: '', weeks: weeks}, "startFrom": today, clientinfoid:  currentUser._id, client_mealplan: "client_mealplan1"});
                    
                    clientInfo.save((errClient => {
                      
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

async function getClient(clientid, trainerid) {
    console.log(clientid, trainerid);
    return Client.find({_id: clientid, trainerid: trainerid });
}

async function getMyClientById(clientid) {
    return  Client.findOne({_id: clientid});
  
}
async function updateAssessment({assessModel, id}) {
    console.log(assessModel, id);
    const updateAssess = Client.updateOne({_id: id},{$set :{client_measurement: assessModel}} ,{ upsert: false })
    return updateAssess;
}
async function updateGoal({clientgoal, id}) {
    console.log(clientgoal, id);
    const updateGoal = Client.updateOne({_id: id},{$set :{client_goal: clientgoal}} ,{ upsert: false })
    return updateGoal;
}
async function updateWorkout({workoutid, id}) {
    console.log(workoutid, id);
    const updateWorkout = Client.updateOne({_id: id},{$set :{client_workplan: {workout_planid: workoutid, weeks: '8'}}} ,{ upsert: false })
    return updateWorkout;
}

// Client Service
async function getMyData(clientinfoid) {
    // console.log(clientinfoid)
    return Client.find({clientinfoid: clientinfoid});
}