const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req,res,next)=>{

    bcrypt.hash(req.body.password,10).then((hash)=>{
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save().then(result=>{
            res.status(201).json({
                message:"User created",
                result:result
            })
        })
        .catch((err)=>{
            res.status(500).json({
                message:"Invalid Authentication Credentials"
            })
        })

    })

}



exports.login = (req,res,next)=>{

    User.findOne({email:req.body.email}).then((user)=>{

        let loggedinuser = user;
         if(!user){
             return res.status(401).json({message:"No User found"})
         }
         bcrypt.compare(req.body.password,user.password).then(result=>{
              const token = jwt.sign({email:loggedinuser.email,id:loggedinuser._id},process.env.BACKEND_SERVER,{expiresIn:"1h"});
              console.log("The environment variable in docker is " + process.env.BACKEND_SERVER)
              res.status(201).json({token:token,expiresin: 3600,userid:loggedinuser._id});

         }).catch((err)=>{
            return res.status(401).json({message:"Auth failed.Please enter valid password"})
         })
    })
}