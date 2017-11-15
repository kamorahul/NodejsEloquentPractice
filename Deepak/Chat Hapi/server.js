var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

app.get('/', function(req, res){
res.sendFile("/home/deepak/Desktop/NodejsEloquentPractice/Deepak/Chat Hapi/login.html");
});

var f="";
fs.readFile("index.html", function (err, data) {
	      if (err) {
		 console.log(err);
	      }else {	
		f+=data;
	      }
	   });

io.on('connection', function(socket){
	var n,i;

	socket.on("nameEvent", function(name){
	n=name;
	i=socket.id;
	console.log(name," Connected!! with id ",socket.id);
	socket.emit("redirect",f);
	});

	socket.on("Chat message", function(msg){
	console.log('message: ' + msg);
	io.emit('Chat message',msg);
	});

	socket.on('disconnect', function(){
	console.log(n,' disconnected');
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


