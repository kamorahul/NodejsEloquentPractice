var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)
app.get('/', function(req, res)
{
  res.sendFile(__dirname+'/index.html');
});
var name="";
io.on('connection', function(socket)
{
  socket.on('connect',function(connect)
  {
  	socket.broadcast.emit('connect',"A new client has joined the chat");
  })	  
  socket.on('event',function(person)
  {
  	name=person;
  })					//broadcast has been used so sender won't see his message but all other clients will see his message //
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', name+" : "+msg);
  })
  
  socket.on('disconnect', function()
  {
    console.log('user disconnected');    
  });
});
http.listen(3000, function()
{
  console.log('listening on *:3000');
  console.log(__dirname)
});