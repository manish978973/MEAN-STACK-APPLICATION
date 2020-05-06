const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const usercontroller = require("../controllers/user");

const router = express.Router();

router.post("/signup",usercontroller.signup );

router.post("/login",usercontroller.login)

module.exports = router;