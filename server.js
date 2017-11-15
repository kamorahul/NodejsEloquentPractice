var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.sockets.on('connection', function(socket){
  socket.on('subscribe', function(room) { 
      console.log('joining room', room);
      socket.join(room); 
  });

  socket.on('unsubscribe', function(room) {  
      console.log('leaving room', room);
      socket.leave(room); 
  });

  socket.on('send', function(data) {
      console.log('sending message');
      socket.broadcast.in(data.room).emit(data.room, data);
  });
});


http.listen(5000, function(){
  console.log('listening on *:5000');
});

