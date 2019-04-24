var nodemailer = require('nodemailer');
var transport_manager = require('nodemailer-smtp-transport');
const mailconfig = require('../configs/mail.config');
module.exports = {    
    sendMail
}
var mailgun = require("mailgun-js");

var mailgun = require('mailgun-js')({apiKey: mailconfig.api_key, domain:mailconfig.DOMAIN, host: 'smtp.mailgun.org',port: 587, secure: false,});



// email, fname, lname, pass,trainerid

async function sendMail({message, sender, recepeint}) {
  console.log(message, sender, recepeint)
      await new Promise((resolve, reject) => {
        
        const data = {
          from: 'PT_APP <parmar.ashesh@tristonsoft.com>',
        to: recepeint,
        subject: 'You are Added as client of ',
        text: message
        };
     
        // })
        mailgun.messages().send(data, function (sendError, body) {
          if (sendError) {
              console.log(sendError);
              return;
          }
      });
      // mailgun.messages().send(data, function (error, body) {
      //   console.log(body);
      });

}
// function getMailoptions(message, sender, recepeint) {
//     var mailOptions = {
//         from: 'silentwraith938@gmail.com',
//         to: recepeint.email,
//         subject: 'You are Added as client of Someone',
//         text: message.message,
        
//       };
//       return mailOptions
// }
// async function sendMail({message, sender, recepeint}) {
    
//     return nodemailer.createTransport(
//         transport_manager({
//             service: 'gmail',
//             host: 'smtp.gmail.com',
//             auth: {
//               user: 'silentwraith938@gmail.com',
//               pass: '+1Engineering1+',
//               port: 4065,
//             secure: false,      
//             tls: {
//                 // do not fail on invalid certs
//                 rejectUnauthorized: false
//             }
//             }
//             })).sendMail(getMailoptions(message,sender,recepeint));
// }