const express = require('express');
const router = express.Router();
const exeService = require('../services/exerciser.service');
router.post('/addexercise',addexercise);
router.get('/', getexerciseAll)
router.post('/myexercises',getmyExercises)
router.post('/getmuscles',getMuscles)
router.post('/getexercise',getMyExerciseByMuscleId)
module.exports = router;
function getexerciseAll(req,res,next) {
    return exeService.getexerciseAll().then(exeItems => {
        res.json(exeItems);
    })
}
function addexercise(req, res, next) {
    const date =new Date();
    const today = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    
    exeModel = { exe_name, userid, exe_type, exe_pic, exe_desc, sec_exe_muscle} = req.body;
    console.log(exeModel);
   exeService.addExercise(exeModel).then((items) => {
       res.json(items);
   }).catch(err => {
        res.json({"error": err})
   }) ;
}

function getmyExercises(req,res,next) {
    const myid = req.body.userid;
    exeService.getMyExercise(myid).then(exeData => {
        if(exeData.length > 0) {
            res.json(exeData);
        }
        else {
            res.json({message: null});
        }
            
    })
    
}
function getMuscles(req,res,next) {
    exeService.getMuscles().then(muscles => {
        console.log(muscles);
        if(muscles.length > 0) {
            res.json(muscles);
        }
    });
}
function getMyExerciseByMuscleId(req,res, next) {
    exeService.getExercise(req.body).then(exeItem => {
        if(exeItem.length > 0) {
            res.json(exeItem);
        }
        else {
            res.json({error: "No records"});
        }
    })
}