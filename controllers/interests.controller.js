const express = require('express');
const router = express.Router();
const   interestsService = require('../services/interests.service');
router.post('/getallinterests',getAllInterests);
module.exports = router;

function getAllInterests(req,res,next) {
      return interestsService.getAllInterests().then(inteData => inteData ? res.json(inteData) : res.json({message: "No data found!"})).catch(error => {
            res.json({message: "Some error occured"+ error});
        })
}