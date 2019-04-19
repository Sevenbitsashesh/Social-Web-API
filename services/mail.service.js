var nodemailer = require('nodemailer');
var transport_manager = require('nodemailer-smtp-transport');
const mailconfig = require('../configs/mail.config');
module.exports = {    
    sendMail
}
var mailgun = require("mailgun-js");

var mailgun = require('mailgun-js')({apiKey: mailconfig.api_key, domain:mailconfig.DOMAIN, host: 'smtp.mailgun.org'});



// email, fname, lname, pass,trainerid

//  function sendMail({message, sender, recepeint}) {
    
//        new Promise((resolve, reject) => {
         
//         const data = {
//           from: 'PT_APP <parmar.ashesh@tristonsoft.com>',
//         to: recepeint.email,
//         subject: 'You are Added as client of ',
//         text: message.message
//         };
        
//         mailgun.messages().send(data, (error) => {
//           if (error) {
//             console.log(error);
//             return reject(error);
//           }
//           console.log(resolve);
//           return resolve();
//         })
//       // mailgun.messages().send(data, function (error, body) {
//       //   console.log(body);
//       // });
// })
// }
function getMailoptions(message, sender, recepeint) {
    var mailOptions = {
        from: 'silentwraith938@gmail.com',
        to: recepeint.email,
        subject: 'You are Added as client of Someone',
        text: message.message
      };
      return mailOptions
}
async function sendMail({message, sender, recepeint}) {
    
    return nodemailer.createTransport(
        transport_manager({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
              user: 'silentwraith938@gmail.com',
              pass: '+1Engineering1+'
            }
            })).sendMail(getMailoptions(message,sender,recepeint));
}