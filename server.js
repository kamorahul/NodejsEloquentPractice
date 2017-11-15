var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var count = 0;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    count++;
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        io.emit('user-count',count);
      });

  socket.on('disconnect', function(){
      count--;
      io.emit('user-count',count);
    // console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
})