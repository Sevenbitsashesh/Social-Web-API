const expressJwt = require('express-jwt');
const config = require('../myconfig.json');
const userService = require('../services/user.service');

module.exports = jwt;


function jwt() {
    // console.log(Date.now()/1000);
    const secret = config.secret;    
    const req = {token: 'asdasd'};
    console.log(req);
    return expressJwt({ secret, verify}).unless({
        path: [
            // public routes that don't require authentication
            // '/interests/getallinterests',
            '/users/authenticate',
            '/users/register',
            '/users/getuserbyuid',
            '/users/saveuserinfo',
            '/users/getuserinfobyid',
            '/users/socialauthenticate',
            '/users/registerSocial'
        ]
    });
}

 async function isRevoked(req, payload, done) {
    
    const user = await  userService.getById(req.body);
    
    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }
    
    done();
};
async function verify() {
    console.log('hi')
}