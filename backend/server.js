const http = require('http');
const app = require('./app')
const debug = require('debug')('node-angular');

//const server = http.createServer((request,response)=>{
 // response.end('This is mine')
//});



const port = process.env.PORT || 3000;
app.set('port',port)
const server = http.createServer(app);

server.listen(port);


