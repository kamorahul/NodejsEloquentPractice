var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/anch.html');
});

// io.on('connection', function(socket){
//   socket.on('chat message', function(sms){
//   	socket.emit("chat message",sms);
//     // console.log('message: ' + sms);
//   });
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
   // io.emit('chat message', sms);
   //socket.broadcast.emit(sms);
  // io.sockets.emit('socket', sms);
 // io.sockets.emit('chat message', sms);
  socket.broadcast.emit('chat message', msg);
  });
});




http.listen(4000, function(){
  console.log('listening on *:4000');
});
