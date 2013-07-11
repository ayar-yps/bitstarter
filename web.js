var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs=require('fs');
  
  //var content=fs.readFileSync('index.html',"utf-8");
  var buffer = new Buffer(fs.redFileSync('index.html'),'utf-8');
  //Responde.send(content);
  Response.send(buffer.toString());

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
