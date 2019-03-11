const expressJwt = require('express-jwt');
const config = require('../myconfig.json');
const userService = require('../services/user.service');

module.exports = jwt;


function jwt() {
    // console.log(Date.now()/1000);
    const secret = config.secret;    
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
            '/users/getuserbyuid',
            '/users/saveuserinfo',
            '/users/getuserinfobyid'
        ]
    });
}

async function isRevoked(req, payload, done) {
    console.log(req.body);
    const user = await userService.getById(req.body);
    
    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};
async function verify(token) {
    
}