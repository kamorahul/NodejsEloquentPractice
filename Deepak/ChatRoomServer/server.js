var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile("/home/deepak/Desktop/NodejsEloquentPractice/Deepak/ChatRoomServer/index.html");
});

io.on('connection', function(socket){
	console.log('a user connected');
	
	socket.on("Chat message", function(msg){
	console.log('message: ' + msg);
	io.emit('Chat message', msg);
	});

	socket.on('disconnect', function(){
	console.log('user disconnected');
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


