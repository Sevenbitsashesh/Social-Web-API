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
    const newClient = new Client(exeModel);
    // console.log(newWork);
    return newClient.save();
    
}
async function getMyClient(myid) {
    return Client.find({trainerid: myid});
}