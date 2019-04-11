const express = require('express');
const router = express.Router();
const mealService = require('../services/meal.service');
router.post('/addmeal',addmeal);
router.get('/', getmealAll)
router.post('/mymeals',getmyMeal)
module.exports = router;
function getmealAll(req,res,next) {
    return mealService.getmealAll().then(exeItems => {
        res.json(exeItems);
    })
}
function addmeal(req, res, next) {
    // const date =new Date();
    // const today = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
    console.log(req.body.work_days);
    
    workModel = { work_name, userid, work_pic, work_days} = req.body;
   workService.addWorkout(workModel).then((items) => {
       res.json(items);
   }).catch(err => {
        res.json({"error": err})
   });
}

function getmyMeal(req,res,next) {
    const myid = req.body.userid;
    mealService.getMymeal(myid).then(mealData => {
        if(mealData.length > 0) {
                res.json(mealData)
        }
        else {
            res.json({message: null})
        }
    })
    
    
}