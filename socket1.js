var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
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
  socket.on('chat message', function(sms){
   io.emit('chat message', sms);
   //socket.broadcast.emit(sms);
  //io.sockets.emit('socket', sms);//sending //....
 // io.sockets.emit('chat message', sms); //
 // socket.broadcast.emit('chat message', sms);//Sending to ALL except Me 
  });
});
    



http.listen(5000, function(){
  console.log('listening on *:5000');
});