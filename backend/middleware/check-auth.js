const jwt = require("jsonwebtoken");



module.exports = (req,res,next)=>{

    try{
    const token = req.headers.authorization.split(" ")[1];
    const decodedtoken = jwt.verify(token,"secret_this_should_be_super_long");
    req.decodedtoken = {email:decodedtoken.email,id:decodedtoken.id};
    next();
    }

    catch(error){
        res.status(401).json({message: "You are not authenticated"});
    }
};