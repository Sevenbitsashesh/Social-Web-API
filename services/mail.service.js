var nodemailer = require('nodemailer');
var transport_manager = require('nodemailer-smtp-transport');
module.exports = {
    
    sendMail
}
function getMailoptions(email, password) {
    var mailOptions = {
        from: 'silentwraith938@gmail.com',
        to: email,
        subject: 'You are Added as client of Someone',
        text: 'Your email is :'+email+'and password is :'+password
      };
      return mailOptions
}
async function sendMail({email,password}) {
    
    return nodemailer.createTransport(
        transport_manager({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
              user: 'silentwraith938@gmail.com',
              pass: '+1Engineering1+'
            }
            })).sendMail(getMailoptions(email,password));
}