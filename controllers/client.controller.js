const express = require('express');
const router = express.Router();
const clientService = require('../services/client.service');
router.post('/addclient',addclient);
router.get('/', getclientAll)
router.post('/myclients',getmyClients)
module.exports = router;
function getclientAll(req,res,next) {
    return clientService.getclientAll().then(clientItems => {
        res.json(clientItems);
    })
}

function addclient(req, res, next) {
    // const date =new Date();
    // const today = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    // console.log(req.body.work_days);
     password = Math.random().toString();
   const clientModel = { client_name, trainerid,first_name, last_name,user_name, password } = req.body;
   clientService.addClient(clientModel).then((items) => {
       res.json(items);
   }).catch(err => {
       console.log(err);
        res.json({"error": err})
   });
}

function getmyClients(req,res,next) {
    const myid = req.body.trainerid;
    clientService.getMyClient(myid).then(clientData => {
        if(clientData.length > 0) {
                res.json(clientData)
        }
        else {
            res.json({message: null})
        }
    })
}