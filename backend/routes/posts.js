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




/**
 * @swagger
 * /api/posts:
 *  get:
 *    description: Use to get all the posts in the respective database
 *    responses:
 *      "200":
 *        description: A successful response 
 */

router.get('',postcontroller.postget);

/**
 * @swagger
 * /api/posts/{id}:
 *  get:
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *            type: integer 
 *            minimum: 1
 *         description: The post id
 *    description: Use to specific post in the respective database
 *    responses:
 *      "201":
 *        description: A successful response 
 */

router.get('/:id',postcontroller.postgetspecific);


/**
 * @swagger
 * /api/posts/{id}:
 *  delete:
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *            type: integer 
 *            minimum: 1
 *         description: The post id
 *    description: Use to specific post in the respective database
 *    responses:
 *      "202":
 *        description: A successful response 
 */



router.delete('/:id',checkAuth,postcontroller.postdelete);

module.exports = router;

