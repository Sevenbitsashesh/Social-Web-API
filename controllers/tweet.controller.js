const express = require('express');
const router = express.Router();
const tweetService = require('../services/tweet.service');

// router.post('/:poistid',getTweetByPId);
router.post('/:userid',getTweetByUId);

module.exports  = {
    // getTweetByPId,
    getTweetByUId
};
module.exports = router;
// function getTweetByPId(req, res,next) {
// }
function getTweetByUId(req, res,next) {

}