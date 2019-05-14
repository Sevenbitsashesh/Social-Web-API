const express = require('express');
const router = express.Router();
const smsService = require('../services/mail.service');
router.post('/sendmail',sendMail);


module.exports = router;
 function sendMail(req,res,next) {
    
    try {
         mailService.sendMail(req.body);
      
        
        res.json({success: "Response sent"});
        
    }catch(e) {
        console.log(e)
         next(e);
    }
      
    
}