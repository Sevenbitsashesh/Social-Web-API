const express = require('express');
const firebase = require('firebase');
const app = express();
const path = require('path');
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://my-social-a5d83.firebaseio.com"
  });
const functions = require('firebase-functions');
var serviceAccount = require("/home/sevenbits11/Ashesh_Trainee/API/serviceAccountKey.json");



var db = admin.firestore();


 
  
app.get('/login', function(req, res) {
    // db.collection('users').get().then(users => {
        res.sendFile(path.join(__dirname, 'index.html'));    
    // })
    
    //  console.log(res);
});

app.listen(process.env.PORT || 4000, function() {
    console.log('Your node js server is running');
});
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
  // Initialize Firebase
  
app.get('/users',(req,res) => {    
    // db.collection('users').get().then(u => {
    //     res.send(u.size);
    // })
    getUsers().then(da => {
        res.render('val',da);
    })
    res.send('data');    
});
function getUsers(){
   
    return db.collection('users').get().then(d => d.size);
}
var config = {
    apiKey: "AIzaSyBqboO_lJPY4SDJbSGbiWzMwhVUIvsTcck",
    authDomain: "my-social-a5d83.firebaseapp.com",
    databaseURL: "https://my-social-a5d83.firebaseio.com",
    projectId: "my-social-a5d83",
    storageBucket: "my-social-a5d83.appspot.com",
    messagingSenderId: "22414347988"
  };
  firebase.initializeApp(config);