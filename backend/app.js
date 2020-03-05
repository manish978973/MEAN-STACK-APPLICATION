const express = require('express');
const bodyParser = require('body-parser');

const moongose = require('mongoose')
const app = express(); // returns express app

const routeposts = require('./routes/posts')

/*
app.use((req,res,next)=>{
  console.log('First middleware')
  next()                              // next is used to pass on to other middlewares or proceed further
});  //middleware used
*/

moongose.connect('mongodb+srv://manu:JQAJgEDe0j7tMtth@cluster0-iz8n0.mongodb.net/test?retryWrites=true&w=majority')
.then(()=>{
  console.log('connected to Database');
})
.catch(()=>{
    console.log('Connection failed');
});
//following is the middleware to avoid cors error (which deals with servers running on different ports or different addresses)
//JQAJgEDe0j7tMtth
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }));   //parsing body

app.use((req,res,next)=>{

res.setHeader('Access-Control-Allow-Origin',"*");
res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
next();
});

app.use("/api/posts",routeposts);

module.exports = app;
