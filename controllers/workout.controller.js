const express = require('express');
const router = express.Router();
const workService = require('../services/workout.service');
router.post('/addworkout',addworkout);
router.get('/', getworkoutAll)
router.post('/myworkouts',getmyWorkouts)
router.post('/myworkout',getmyWorkout)
router.post('/myworkoutplan',myworkoutplan)
module.exports = router;

// Trainer Services

function getworkoutAll(req,res,next) {
    return workService.getworkoutAll().then(exeItems => {
        res.json(exeItems);
    })
}
function addworkout(req, res, next) {
    // const date =new Date();
    // const today = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    console.log(req.body.work_days);
    
    workModel = { work_name, userid, work_pic, work_days} = req.body;
   workService.addWorkout(workModel).then((items) => {
       res.json(items);
   }).catch(err => {
       console.log(err)
        res.json({"error": err})
   });
}

function getmyWorkouts(req,res,next) {
    const myid = req.body.userid;
    workService.getMyWorkouts(myid).then(workData => {
        if(workData.length > 0) {
                res.json(workData)
        }
        else {
            res.json({message: null})
        }
    })
    
    
}
function getmyWorkout(req, res, next) {
    const workid = req.body.workoutid;
    workService.getMyWorkout(workid).then(workData => {
        if(workData.length > 0) {
            res.json(workData[0]);
        }
        else {
            res.json({message: 'No Record'});
        }
    }).catch(error => {
        res.json({message: error});
    })
}
// Client Services 

function myworkoutplan(req,res,next) {
    
    const workoutid = req.body.workoutid;
    workService.getMyWorkoutPlan(workoutid).then(workData => {
        if(workData.length > 0) {
                res.json(workData[0])
        }
        else {
            res.json({message: null})
        }
    })
}