var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});
//
// io.on("connection",(socket)=>{
// socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//     io.emit("chat message",msg);
//   });
// });



io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  console.log('message: ' + msg);
  socket.broadcast.emit("chat message",msg);
});

socket.on('disconnect', function(){
    console.log('1 user disconnected');
  });
});
http.listen(8000, function(){
  console.log('listening on :8000');
});
