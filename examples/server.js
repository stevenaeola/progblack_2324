 const express = require("express");
 const app = express();

 app.get('/', function(req, resp){
    resp.send('Hello everybody')
  })

  app.get('/bob/b', function(req, resp){
    resp.send('Hello builder')
  })

  app.get('/random/:max', function(req, resp){
    max = parseInt(req.params.max)
    rand = Math.floor(Math.random()*max) +1
    console.log('Max via url is ' + max + ' rand is ' + rand)
    resp.send('' + rand)
  })
  
  app.get('/r', function(req, resp){
    max = parseInt(req.query.max)
    rand = Math.floor(Math.random()*max) +1
    console.log('Max via query is ' + max + ' rand is ' + rand)
    resp.send('' + rand)
  })
  
  app.listen(8090)