var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
  var i = 0;
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(4070, function(){
	console.log('listening on :4070');
});

io.on('connection', function(socket){
	console.log("user has connected with id: " + socket.id);
	 i = i+1;
	socket.on('chat message', function(msg){
		console.log(msg);
    io.emit('chat message', msg);
  });
	console.log("user count: ", i);
});

