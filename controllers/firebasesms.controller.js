const express = require('express');
const router = express.Router();
router.post('/sendsms',sendSms);
const fsmsService = require('../services/firebasesms.service');



module.exports = router;
function sendSms(req,res,next) {
    fsmsService.sendSMS(req.body).then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
        res.send({response: "Successfully sent message"})
      })
      .catch((error) => {
        console.log('Error sending message:', error);
        res.send({response: "Error sending message"})
      });
}