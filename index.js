var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users = [];
connections = [];

server.listen(3000);
console.log('server is listening at port 3000');
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});



io.sockets.on('connection',function(socket){
	connections.push(socket);
	console.log("connected: %s sockets connected", connections.length);

	//disconneted
	socket.on('disconnect',function(data){
		users.splice(users.indexOf(socket.username),1)
		updateUsernames();

		connections.splice(connections.indexOf(socket),1);
	console.log("disconnected: %s sockets connected",connections.length);
});
	
	//send message
	socket.on('send message',function(data){
		io.sockets.emit('new message',{msg:data,user:socket.name});
	})
	//new user
	socket.on('new user',function(data,callback){
		callback(true);
		socket.username = data;
		users.put(socket.username);
		updataeUsernames();
	});
	function updateUsernames(){
		io.sockets.emit('get users',users);
	}
});