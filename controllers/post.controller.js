const express = require('express');
const router = express.Router();
const postService = require('../services/post.service');
router.post('/:postid',getPostByPId);
router.post('/:userid',getPostByUId);

module.exports  = {
    getPostByPId,
    getPostByUId
};
function getPostByPId(req, res,next) {

}
