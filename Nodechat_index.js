var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var connections=[];
var users=[];
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected %s sockets connected',connections.length);

socket.on('disconnect',(socket)=>{
  connections.splice(connections.indexOf(socket),1);
  console.log("Sockets disconnected remaining connections:",connections.length);

});

socket.on('user info',(data)=>{

  users.push(data);
  socket.username=data;
  io.emit('online',users);

  console.log(socket.username);
})
  socket.on('chat message', function(msg){
    console.log(socket.username+":",msg);
    socket.broadcast.emit('display message',msg,socket.username);
  //io.emit('display message',msg,socket.username);
  });


});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
