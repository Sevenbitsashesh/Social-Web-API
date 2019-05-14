const mailjetconfig = require('../configs/mailjet.config.json');
var Mailjet = require('node-mailjet').connect('24e9c2eb0aca1c26a04fbfec618b0071', 'a89d83414321a23808e286aa40cce856');

module.exports = {    
    sendSMS
}
async function sendSMS({message, sender, recepeint}) { 
    
}