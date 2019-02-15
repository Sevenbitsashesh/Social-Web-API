const express = require('express');
const session = require('express-session');
const router = express.Router();
const   userService = require('../services/user.service');
router.post('/authenticate',authenticate);
router.get('/', getAll);
router.post('/register', register);



module.exports = router;

function authenticate(req, res, next) {    
  
userService.authenticate(req.body).then(user => user ?  res.json(user) : res.status(401).json({message: "Email or password is incorrect"}))
.catch(err => next(err));
};
function getAll(req,res, next) {
    userService.getAll().then(users => res.json(users)).catch(err => next(err));
}
function register(req, res, next) {
    userService.register(req.body).then((err, user) => { 
        if(err) {
            res.json(err.message);
        }
        else {
            console.log(req.body);
        }
        
    }).catch((err) => {
        next(err);
        // res.send({message: "Error registering user"});
    })
    // .then((user) => { 
    //     user ? res.json({message: 'Registration Success!'}) : res.status(200).json({message: "Error registering User"}).catch(err => res.status(200).json({message: err}));
    // });
}
