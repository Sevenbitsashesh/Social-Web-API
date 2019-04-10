const express = require('express');
const router = express.Router();
const workService = require('../services/workout.service');
router.post('/addworkout',addworkout);
router.get('/', getworkoutAll)
router.post('/myworkouts',getmyWorkouts)
module.exports = router;
function getworkoutAll(req,res,next) {
    return workService.getworkoutAll().then(exeItems => {
        res.json(exeItems);
    })
}
function addworkout(req, res, next) {
    const date =new Date();
    const today = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    
    exeModel = { exe_name, userid, exe_type, exe_pic, exe_desc} = req.body;
   exeService.addExercise(exeModel).then((items) => {
       res.json(items);
   }).catch(err => {
        res.json({"error": err})
   }) ;
}

function getmyWorkouts(req,res,next) {
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