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
    
    clientModel = { client_name, userid, work_pic, work_days} = req.body;
   workService.addWorkout(workModel).then((items) => {
       res.json(items);
   }).catch(err => {
        res.json({"error": err})
   });
}

function getmyClients(req,res,next) {
    const myid = req.body.userid;
    workService.getMyWorkout(myid).then(workData => {
        if(workData.length > 0) {
                res.json(workData)
        }
        else {
            res.json({message: null})
        }
    })
    
    
}