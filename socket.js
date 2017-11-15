var exp = require('express');
var socket = require('socket.io');

var app = exp();
var server = app.listen(4000,function(){
console.log("listening to port 4000");
});
app.use(exp.static('index'));

var io = socket(server);
io.on('connection',function(socket){
  console.log(" socket connection done");
  socket.on('chat',function(data){
  socket.broadcast.emit('chat',data);
  });
  
});
