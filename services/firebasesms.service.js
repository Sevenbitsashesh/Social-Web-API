const app = require('firebase');
const messaging = require('firebase/messaging');
const config = {
  apiKey: "AIzaSyBqboO_lJPY4SDJbSGbiWzMwhVUIvsTcck",
  authDomain: "my-social-a5d83.firebaseapp.com",
  databaseURL: "https://my-social-a5d83.firebaseio.com",
  projectId: "my-social-a5d83",
  storageBucket: "my-social-a5d83.appspot.com",
  messagingSenderId: "22414347988",
  appId: "1:22414347988:web:ac54ad1d68523995"
}
const firebase = app.initializeApp(config);
// const messaging =  firebase.messaging();

module.exports = {    
    sendSMS
}

async function sendSMS(text) {
  // app.messaging().usePublicVapidKey('BE3IhUmeIL5V9knBZAT0pbj46CzkB_ibJoadkbgdUIiYZA4AnIO1prnm0KvqzHq_YaRakHVm7qcTC9qHyq3-TlM');
  // firebase.requestPermission.requestPermission()
  // .then(function() {
  //   console.log('Notification permission granted.');
  
  // }).catch(function(err) {
  //   console.log('Unable to get permission to notify.', err);
  // })
 
  var registrationToken = 'BE3IhUmeIL5V9knBZAT0pbj46CzkB_ibJoadkbgdUIiYZA4AnIO1prnm0KvqzHq_YaRakHVm7qcTC9qHyq3-TlM';
  
var message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
return firebase.messaging().send(message)
  


}

