// var nodemailer = require('nodemailer');
// var transport_manager = require('nodemailer-smtp-transport');
const mailconfig = require('../configs/mail.config');
module.exports = {    
    sendMail
}
var mailgun = require("mailgun-js");

var mailgun = require('mailgun-js')({apiKey: mailconfig.api_key, domain:mailconfig.DOMAIN});





async function sendMail({email, fname, lname, pass,trainerid}) {
    
      new Promise((resolve, reject) => {
        const data = {
          from: 'PT_APP <parmar.ashesh@tristonsoft.com>',
        to: email,
        subject: 'You are Added as client of '+trainerid,
        text: 'Your email is : '+email+' and password is :'+pass+' '+'Login in to https://pt-fits-life.firebaseapp.com'
        };
    
        mailgun.messages().send(data, (error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      // mailgun.messages().send(data, function (error, body) {
      //   console.log(body);
      // });
}).catch(error => {
  console.log('could not send mail'+error);
})
}
// function getMailoptions(email, pass) {
//     var mailOptions = {
//         from: 'silentwraith938@gmail.com',
//         to: email,
//         subject: 'You are Added as client of Someone',
//         text: 'Your email is : '+email+' and password is :'+pass+' '+'Login in to https://pt-fits-life.firebaseapp.com'
//       };
//       return mailOptions
// }
// async function sendMail({email,pass}) {
    
//     return nodemailer.createTransport(
//         transport_manager({
//             service: 'gmail',
//             host: 'smtp.gmail.com',
//             auth: {
//               user: 'silentwraith938@gmail.com',
//               pass: '+1Engineering1+'
//             }
//             })).sendMail(getMailoptions(email,pass));
// }