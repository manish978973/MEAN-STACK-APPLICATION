const express = require("express");

const router = express.Router();

const Post = require('../models/post');

router.post("",(req,res,next)=>{

  //const post = req.body;
  const post = new Post({title:req.body.title,description:req.body.description});
  console.log('this is the' + post);
  post.save().then(response=>{

      res.status(201).json({
        message:'Post added',
        id: response._id

      })

  });

});


router.put("/:id",(req,res,next)=>{
  const newpost = new Post({
    _id: req.body.id,
    title: req.body.title,
    description: req.body.description

  })



  Post.updateOne({_id:req.params.id},newpost).then(result =>{
    console.log(result);
    res.status(200).json({
      message:'Update Successful'


    })

  })
});






router.get('',(req,res,next)=>{

  //const posts = [{id:"1",title:"Sasi",description:"Sasi is coming"},{id:"2",title:"Shaji",description:"Shaji is going"}]
  //res.send('Hello from 1express');
   Post.find()
    .then((respo)=>{
      const posts = respo;
      console.log(respo);
      res.status(200).json({
        message:"Posts fetched successfully",
        posts: posts
      })

    })
    .catch((err)=>{
      console.log(err);

    });


                         // next is used to pass on to other middlewares or proceed further

});


router.get('/:id',(req,res,next)=>{

  //const posts = [{id:"1",title:"Sasi",description:"Sasi is coming"},{id:"2",title:"Shaji",description:"Shaji is going"}]
  //res.send('Hello from 1express');
   Post.findById(req.params.id)
    .then((respo)=>{
      if (respo){

        res.status(200).json(respo)


      }

      else {
        res.status(404).json({message:"POST NOT FOUND"})
      }


    })
    .catch((err)=>{
      console.log(err);

    });


                         // next is used to pass on to other middlewares or proceed further

});


router.delete('/:id',(req,res,next)=>{

  console.log(req.params.id);
  Post.deleteOne({_id:req.params.id}).then((response)=>{
    console.log(response);
  res.status(200).json({message:"Post deleted"});

});

});

module.exports = router;

