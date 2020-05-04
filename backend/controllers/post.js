const express = require("express");
const multer = require("multer");

const router = express.Router();



const Post = require('../models/post');
const checkAuth = require("../middleware/check-auth");


exports.postcreate = (req,res,next)=>{

    //const post = req.body;
    const imagepath = req.protocol + "://" + req.get("host");
    const post = new Post({title:req.body.title,description:req.body.description,image:imagepath+"/images/"+req.file.filename,creator:req.decodedtoken.id});
    console.log('this is the' + post);
    post.save().then(response=>{
  
        res.status(201).json({
          
          message:'Post added',
          post: {
         //   ...response,
            id: response._id,
            title: response.title,
            description: response.description,
            image: response.image
            
          }
  
  
        })
  
        console.log("POST SAVED SUCCESS");
  
    }).catch((err)=>{
      res.status(500).json({message:"Creating a post failed"})
    });
  
  }



  exports.postupdate = (req,res,next)=>{

    let imagepath = req.body.image;
  
    if(req.file){
  
      const url = req.protocol + "://" + req.get("host");
      imagepath = url + "/images/"+ req.file.filename;
  
    }
    const newpost = new Post({
      _id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      image:imagepath,
      creator:req.decodedtoken.id
  
    })
  
  
  
    Post.updateOne({_id:req.params.id,creator:req.decodedtoken.id},newpost).then(result =>{
      console.log(result);
      if(result.n > 0){
        res.status(200).json({
          message:'Update Successful'
    
    
        })
      }
  
      else{
        res.status(401).json({
          message:'Authorization error'
    
    
        })
      }
      
  
    }).catch((err)=>{
      res.status(500).json({message:"Couldnt update post"})
    })
  }


  exports.postget = (req,res,next)=>{

    console.log(req.query);
  
    const pagesize = +req.query.pagesize;
    const page = +req.query.page;
    const querymachine = Post.find();
    let fectheddocuments;
  
    if(pagesize && page){
      querymachine
           .skip(pagesize * (page-1))
           .limit(pagesize);
  
  
    }
  
  
  
    //const posts = [{id:"1",title:"Sasi",description:"Sasi is coming"},{id:"2",title:"Shaji",description:"Shaji is going"}]
    //res.send('Hello from 1express');
    querymachine
      .then(respo=>{
        fectheddocuments = respo;
        return Post.count();
      })
      .then(count=>{
  
      //  const posts = respo;
       //
        //console.log(respo);
        res.status(200).json({
          message:"Posts fetched successfully",
          posts: fectheddocuments,
          maxposts:count
  
  
        })
  
      })
      .catch((err)=>{
        console.log(err);
        res.status(500).json({message:"Fetching posts failed"})
  
      });
  
  
                           // next is used to pass on to other middlewares or proceed further
  
  }


  exports.postgetspecific = (req,res,next)=>{

    //const posts = [{id:"1",title:"Sasi",description:"Sasi is coming"},{id:"2",title:"Shaji",description:"Shaji is going"}]
    //res.send('Hello from 1express');
     Post.findById(req.params.id)
      .then((respo)=>{
        if (respo){
  
          res.status(200).json(respo);
          //const post = new Post({title:req.body.title,description:req.body.description,image:imagepath+"/images/"+req.file.filename});
  
  
        }
  
        else {
          res.status(404).json({message:"POST NOT FOUND"})
        }
  
  
      })
      .catch((err)=>{
        console.log(err);
        res.status(500).json({message:"Fetching post failed"})
  
      });
  
  
                           // next is used to pass on to other middlewares or proceed further
  
  }


  exports.postdelete = (req,res,next)=>{

    console.log(req.params.id);
    Post.deleteOne({_id:req.params.id,creator:req.decodedtoken.id}).then((response)=>{
      if(response.n > 0){
        res.status(200).json({
          message:'Post deleted'
    
    
        })
      }
  
      else{
        res.status(401).json({
          message:'Authorization error'
    
    
        })
      }
  
  })  .catch((err)=>{
    console.log(err);
    res.status(500).json({message:"Deleting posts failed"})
  
  });;
  
  }