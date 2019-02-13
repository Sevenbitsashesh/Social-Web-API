const express = require('express');
const router = express.Router();
const   userService = require('./user.service');
router.post('/authenticate',authenticate);
router.get('/', getAll);

module.exports = router;

function authenticate(req, res, next) {    
userService.authenticate(req.body).then(user => user ? res.json(user) : res.status(401).json({message: "Email or password is incorrect"}))
.catch(err => next(err));
}
function getAll(req,res, next) {
    userService.getAll().then(users => res.json(users)).catch(err => next(err));
}
