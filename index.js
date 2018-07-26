var express = require('express');
var bcrypt = require('bcrypt');
var app = express();
var Acc=0;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/home/:id',function(req,res){
  if(req.params.id==5){
    res.send("1");
    res.end();
  }
  bcrypt.hash(req.params.id, 10, function(err, hash) {
    // Store in database
    console.log(hash);
  });
  //Get Data from debug
  //Get previous hash
  res.send("0");
  res.end();
}).
get('/:symbol/:money',function(req,res){
  if(req.params.symbol=="+"){
    Acc+=parseInt(req.params.money);
    res.send(Acc.toString());
    res.end();
  }
  else{
    if(parseInt(Acc)<parseInt(req.params.money)){
      res.send("-1");
      res.end();
    }
    else{
      Acc-=parseInt(req.params.money)
      res.send(Acc.toString());
      res.end();
    }
  }
}).
post('/',function(req,res){
  res.send("POST Done");
  res.end();
});
app.listen(3000, () => console.log('Starting Server'))
