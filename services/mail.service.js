var nodemailer = require('nodemailer');
var transport_manager = require('nodemailer-smtp-transport');
const mailgunconfig = require('../configs/mail.config');
const mailjetconfig = require('../configs/mailjet.config.json');
var Mailjet = require('node-mailjet').connect('24e9c2eb0aca1c26a04fbfec618b0071', 'a89d83414321a23808e286aa40cce856');

module.exports = {    
    sendMail
}
var mailgun = require("mailgun-js");


// var mailgun = require('mailgun-js')({apiKey: mailconfig.api_key, domain:mailconfig.DOMAIN, host: 'smtp.mailgun.org',port: 587, secure: false,});
// var mailjet = require('node-mailjet').connect('24e9c2eb0aca1c26a04fbfec618b0071','a89d83414321a23808e286aa40cce856',{
//   url: 'in-v3.mailjet.com', // default is the API url
//   version: 'v3.1', // default is '/v3'
//   perform_api_call: true // used for tests. default is true
// });



// email, fname, lname, pass,trainerid


async function sendMail({message, sender, recepeint}) {
  var sendEmail = Mailjet.post('send', { url: 'in-v3.mailjet.com', version: 'v3', perform_api_call: false, port: '587' });
  console.log(message, sender, recepeint)
      
        const rec = recepeint.recepeint;
        const data = {
          FromEmail: 'patel.abhishek@tristonsoft.com',
          FromName: 'PT_APP',
          Subject: 'NEW CLIENT DATA',
          'Text-part': message.message,
          Recipients: {'Email': rec}
        };
     
        // })
        sendEmail.request(data)
        .then(handlePostResponse => {
          console.log(handlePostResponse)
        })
        .catch(handleError => {
          console.log('error'+handleError);
        });
      // mailgun.messages().send(data, function (error, body) {
      //   console.log(body);
      

}











// Not Working
// async function sendMail({message, sender, recepeint}) {
//   console.log(message, sender, recepeint)
//       await new Promise((resolve, reject) => {
        
//         const data = {
//           from: 'PT_APP <parmar.ashesh@tristonsoft.com>',
//         to: recepeint,
//         subject: 'You are Added as client of ',
//         text: message
//         };
     
//         // })
//         mailgun.messages().send(data, function (sendError, body) {
//           if (sendError) {
//               console.log(sendError);
//               return;
//           }
//       });
//       // mailgun.messages().send(data, function (error, body) {
//       //   console.log(body);
//       });

// }












// Working
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