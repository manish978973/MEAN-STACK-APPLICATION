const express = require("express");
//const multer = require("multer");

const router = express.Router();



//const Post = require('../models/post');
const checkAuth = require("../middleware/check-auth");

const postcontroller = require("../controllers/post");

const extractimagefile = require("../middleware/multermiddleware")



//multer storage need to be passed as Javascript object
router.post("",checkAuth,extractimagefile,postcontroller.postcreate);


router.put("/:id",checkAuth,extractimagefile,postcontroller.postupdate);






router.get('',postcontroller.postget);


router.get('/:id',postcontroller.postgetspecific);


router.delete('/:id',checkAuth,postcontroller.postdelete);

module.exports = router;

