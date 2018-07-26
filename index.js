var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.send("GET Done");
  res.end();
}).
post('/:id',function(req,res){
  res.send("POST Done");
  res.end();
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))
