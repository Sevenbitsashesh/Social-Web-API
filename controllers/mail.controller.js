const express = require('express');
const router = express.Router();
const mailService = require('../services/mail.service');
router.post('/sendmail',sendMail);


module.exports = router;
async function sendMail(req,res,next) {
    
    try {
        await mailService.sendMail(req.body).then(e => {
            console.log(e);
            res.send({message: e});
        });
      
        
        // res.json({success: "Response sent"});
        
    }catch(e) {
        await next(e);
    }
      
    
}