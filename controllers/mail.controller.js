const express = require('express');
const router = express.Router();
const mailService = require('../services/mail.service');
router.post('/sendmail',sendMail);


module.exports = router;
async function sendMail(req,res,next) {
    
    try {
        await mailService.sendMail(req.body);
      
        
        res.json({success: "Response sent"});
        
    }catch(e) {
        console.log(e)
        await next(e);
    }
      
    
}