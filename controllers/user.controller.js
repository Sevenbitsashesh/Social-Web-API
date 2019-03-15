const express = require('express');
const session = require('express-session');
const router = express.Router();
const   userService = require('../services/user.service');
router.post('/authenticate',authenticate);
router.post('/socialauthenticate',socialAuthenticate);
router.get('/', getAll);
router.post('/register', register);
router.post('/getuserinfobyid', getUserInfoById);
router.post('/getuserbyuid', getUserById);
router.post('/saveuserinfo', addUserInfo);
module.exports = router;

function authenticate(req, res, next) {    
  
return userService.authenticate(req.body).then(user => user ?  res.json(user) : res.status(200).json({message: "Email or password is incorrect"}))
.catch(err => next(err));
};
function getAll(req,res, next) {
    userService.getAll().then(users => res.json(users)).catch(err => next(err));
}
function register(req, res, next) {
    userService.getUserByEmail(req.body).then(u => {
        // console.log(u);
        if(u.length === 0) {
            userService.register(req.body,res);
        }
        else if(u.length > 0) {
            res.status(200).json({error: "Email already have an account!"});
        }
        else {
            res.status(200).json({error: "Try again later"});
        }
    }
    )    
}
function getUserInfoById(req, res,next) {
    // console.log(req.body);
    
  return userService.getUserInfo(req.body).then(uinfo =>   uinfo.length !== 0 ? res.json(uinfo) : res.json({message: "Not found"})).catch(err => next(err));    
}
function getUserById(req, res, next) {
    // console.log(req.body.userid);
    userService.getUserByUid(req.body).then(user => user.length? res.json(user) : res.json({message: "Not found"}));
}
function addUserInfo(req,res, next) {
    console.log(req.body);
    userService.addUserInfo().then(user => user ?  res.json(user) : res.json({message: "Error registering users info"}));
}
function socialAuthenticate(req, res, next) {    
    userService.getUserInfo(req.body).then(user => {
        console.log(user);
        userService.socialAuthenticate(user).then(socialuser => { 
            
            // console.log(socialuser);
            res.json(socialuser);
                    
        }).catch(err => {
            console.log('error'+err);
        next(err);
        })
        
    });
}
