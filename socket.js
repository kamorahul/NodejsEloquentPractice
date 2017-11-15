var x = require('express')();
var http= require('http').Server(x);
var io = require('socket.io')(http);
x.get('/', function (req, res) {
	  res.sendFile(__dirname+'/chat.html');

});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  // socket.on('typing', function (data) {
  //     console.log(data);
  //     socket.broadcast.emit('typing', data);
  //   });
});
http.listen(8000, function(){
	console.log('listening on port 8000');
});
 