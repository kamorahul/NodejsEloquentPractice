var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      socket.broadcast.emit('chat message', msg);
     
    });
});


http.listen(5000, function(){
  console.log('listening on *:5000');
});

