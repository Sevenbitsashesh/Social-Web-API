const express = require('express');
const session = require('express-session');
const router = express.Router();
const   userService = require('../services/user.service');
router.post('/authenticate',authenticate);
router.get('/', getAll);
router.post('/register', register);
router.post('/getuserinfobyid', getUserInfoById);
router.post('/getuserbyuid', getUserById);

module.exports = router;

function authenticate(req, res, next) {    
  
return userService.authenticate(req.body).then(user => user ?  res.json(user) : res.status(401).json({message: "Email or password is incorrect"}))
.catch(err => next(err));
};
function getAll(req,res, next) {
    userService.getAll().then(users => res.json(users)).catch(err => next(err));
}
function register(req, res, next) {
    userService.register(req.body,res);
    // .then(user => user ? res.json(user) : res.status(401).json({message: "Error Registering User"})).catch((err) => {
        
    // res.json(err);
    // })
}
function getUserInfoById(req, res,next) {
    console.log(req.body);
    
   userService.getUserInfo(req.body).then(uinfo => { res.json(uinfo) }).catch(err => next(err));    
}
function getUserById(req, res, next) {
    userService.getUserByUid(req.body).then(user => user.length? res.json(user) : res.status(401).json({message: "Not found"})) ;
}

