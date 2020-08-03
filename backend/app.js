const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const moongose = require('mongoose')
const app = express(); // returns express app

const routeposts = require('./routes/posts')
const routeusers = require('./routes/user');



const swaggerOptions = {

  swaggerDefinition: {
    info: {
      title: "Posts API",
      description: "API Information based on Posts and Remainders",
      contact: {
        name: "Manish Rama Chandran"
      },
      servers: ["http://localhost:3000"]
    }
  },
  apis: ["./routes/posts.js"]
};


const swaggerDocs =  swaggerJsDoc(swaggerOptions);

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

/*
app.use((req,res,next)=>{
  console.log('First middleware')
  next()                              // next is used to pass on to other middlewares or proceed further
});  //middleware used
*/

//moongose.connect('mongodb+srv://manu:JQAJgEDe0j7tMtth@cluster0-iz8n0.mongodb.net/test?retryWrites=true&w=majority')
//moongose.connect('mongodb://127.0.0.1:27017/myapp');
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
}


const connectWithRetry = () => {
  console.log('MongoDB connection with retry')
  moongose.connect('mongodb+srv://manu:JQAJgEDe0j7tMtth@cluster0-iz8n0.mongodb.net/meancoursedockerdb?retryWrites=true&w=majority', options).then(()=>{ //'mongodb://127.0.0.1:27017/myapp  //mongodb://mongo:27017/myapp
    console.log('MongoDB is connected')
  }).catch(err=>{
    console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
    setTimeout(connectWithRetry, 5000)
  })
}

connectWithRetry()

/*
moongose.connect('mongodb+srv://manu:JQAJgEDe0j7tMtth@cluster0-iz8n0.mongodb.net/test?retryWrites=true&w=majority').then(()=>{
  console.log('connected to Database');
})
.catch(()=>{
    console.log('Connection failed');
}); */
//following is the middleware to avoid cors error (which deals with servers running on different ports or different addresses)
//JQAJgEDe0j7tMtth
app.use(bodyParser.json())       //doesnt work with image files....only meant for urls
app.use(bodyParser.urlencoded({ extended:false }));   //parsing body



//to make image folder static accessible
app.use("/images",express.static(path.join("./images")));

app.use((req,res,next)=>{

res.setHeader('Access-Control-Allow-Origin',"*");
res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
next();
});

app.use("/api/posts",routeposts);
app.use("/api/user",routeusers);

module.exports = app;
