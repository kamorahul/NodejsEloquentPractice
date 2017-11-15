/*var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
users=[];
connections=[];
app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
});

//On connection
io.on('connection', function(socket){
    console.log('New connection established!! : %s users connected!', (connections.length+1));
    connections.push(socket);
    //On disconnect
    socket.on('disconnect', function(){
        connections.splice(connections.indexOf(socket),1);
        console.log('Connection dropped!! : %s users connected!', connections.length);
    });
    //Sending messages
    socket.on('chat message', function(msg)
    {
        console.log('Message: '+msg);
        io.emit('chat message', msg);
    });
});

http.listen(3000, function() {
    console.log('Listening on port 3000');
});*/
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
users=[];
connections=[];
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
    console.log('New connection established!! : %s users connected!', (connections.length+1));
    connections.push(socket);
    socket.on('disconnect', function(){
        connections.splice(connections.indexOf(socket),1);
        console.log('Connection dropped!! : %s users connected!', connections.length);
    });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
  });
  
  });
  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });
http.listen(3000, function(){
  console.log('listening on *:3000');
});