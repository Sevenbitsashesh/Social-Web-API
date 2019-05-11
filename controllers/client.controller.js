const express = require('express');
const router = express.Router();
const clientService = require('../services/client.service');
const userService = require('../services/user.service');
router.post('/addclient',addclient);
router.get('/', getclientAll)
router.post('/myclients',getmyClients)
router.post('/getclient',getClient)
router.post('/getmydata', getMyData)
router.post('/updateassessment', updateAssessment)
router.post('/updategoal', updateGoal)
router.post('/updateworkout', updateWorkout)
module.exports = router;
function getclientAll(req,res,next) {
    return clientService.getclientAll().then(clientItems => {
        res.json(clientItems);
    })
}

function addclient(req, res, next) {
    
    //  userModel = {fname: data.fname, lname: data.lname, email: data.email, hash: randomstring, user_name: data.email, role: "Client" };
console.log(req.body);
    
    userService.getUserByEmail(req.body).then(u => {
        // console.log(u);
        if(u.length === 0) {
            clientService.addClientUser(req.body, res)
        }
        else if(u.length > 0) {
            res.status(200).json({error: "Email already have an account!"});
        }
        else {
            res.status(200).json({error: "Try again later"});
        }
    })    .catch(error => {
        console.log(error);
        res.status(200).json({error: "Try again later"});
    })


}

function getmyClients(req,res,next) {
    
    
    const myid = req.body.trainerid;
    console.log(req.body)
    clientService.getMyClient(myid).then(clientData => {
        if(clientData.length > 0) {
                res.json(clientData)
        }
        else {
            res.json({message: null})
        }
    })
}

function getClient(req, res, next) {
    
    const {clientid, trainerid} = req.body;
    clientService.getClient(clientid, trainerid).then(clientInfo => {
        if(clientInfo.length > 0) {
            res.json(clientInfo);
        }
        else {
            res.json({message: "No record"});
        }
    }).catch(error => {
        res.json({error: error});
    })
}

function getMyData(req, res, next) {

    const {clientinfoid} = req.body;
    clientService.getMyData(clientinfoid).then(clientInfo => {
        if(clientInfo.length > 0) {
            res.json(clientInfo);
        }
        else {
            res.json({message: "No record"});
        }
    }).catch(error => {
        console.log(error);
        res.json({error: error});
    })

}
function updateAssessment(req, res, next) {
    const {id} = req.body;
    
    clientService.getMyClientById(id).then(clientData => {
        if(clientData) {
            clientService.updateAssessment(req.body).then(updateData => {
                
                if(updateData.ok) {
                    res.json({message: "success"});
                }
                else {
                    res.json({message: "failed"});
                }
            })            
        }
        else {
            res.json({message: "failed"});
        }
        
    }).catch(error => {
        res.json({message: "failed"});
    })
}
function updateGoal(req, res, next) {
    const {id} = req.body;
    
    clientService.getMyClientById(id).then(clientData => {
        if(clientData) {
            clientService.updateGoal(req.body).then(updateData => {
                
                if(updateData.ok) {
                    res.json({message: "success"});
                }
                else {
                    res.json({message: "failed"});
                }
            })            
        }
        else {
            res.json({message: "failed"});
        }
        
    }).catch(error => {
        res.json({message: "failed"});
    })
}
function updateWorkout(req, res, next) {
    const {id} = req.body;
    
    clientService.getMyClientById(id).then(clientData => {
        if(clientData) {
            clientService.updateWorkout(req.body).then(updateData => {
                
                if(updateData.ok) {
                    res.json({message: "success"});
                }
                else {
                    res.json({message: "failed"});
                }
            })            
        }
        else {
            res.json({message: "failed"});
        }
        
    }).catch(error => {
        res.json({message: "failed"});
    })
}