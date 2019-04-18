// var nodemailer = require('nodemailer');
// var transport_manager = require('nodemailer-smtp-transport');

module.exports = {    
    sendMail
}
var mailgun = require("mailgun-js");
var api_key = '046883e2536d697ef8e8aae134c786b2-3fb021d1-591ca113';
var DOMAIN = 'sandbox363636f0eae046d98c8a773bd5c5a1ab.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});





function sendMail({email, fname, lname, pass,trainerid}) {
    var data = {
        from: 'PT_APP Sandbox ',
        to: email,
        subject: 'You are Added as client of '+trainerid,
        text: 'Your email is : '+email+' and password is :'+pass+' '+'Login in to https://pt-fits-life.firebaseapp.com'
      };
      mailgun.messages().send(data, function (error, body) {
        console.log(body);
      });
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