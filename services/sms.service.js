const mailjetconfig = require('../configs/mailjet.config.json');
var Mailjet = require('node-mailjet').connect('24e9c2eb0aca1c26a04fbfec618b0071', 'a89d83414321a23808e286aa40cce856');

module.exports = {    
    sendSMS
}
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '32892525',
  apiSecret: 'R2gM8YMNU1ygUwxT'
})


async function sendSMS(text) {
    console.log(text)
    const from = 'NEXMO'
const to = '919601181773'

nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
}
