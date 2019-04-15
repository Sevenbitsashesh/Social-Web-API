const bcrypt = require('bcryptjs');
const db = require('../_helper/db');
const Client = db.client;

module.exports = {
    getclientAll,
    addClient,
    getMyClient
}
async function getclientAll() {
    return Client.find();
}
async function addClient(clientModel) {
    // const newClient = new Client(clientModel);
    console.log(clientModel);
    // return new Promise();
    // return newClient.save();
    
}
async function getMyClient(myid) {
    // console.log(myid);
    return Client.find({trainerid: myid});
}