const express = require('express');
const router = express.Router();
const smsService = require('../services/sms.service');
router.post('/sendsms',sendSms);


module.exports = router;
 function sendSms(req,res,next) {
    
    try {
         smsService.sendSMS(req.body.text).then(smsData => {
             console.log(smsData);
            res.json({success: "Response sent"});
         }).catch(error => {
             console.log(error)
         });        
    }catch(e) {
        console.log(e)
         next(e);
    }
      
    
}