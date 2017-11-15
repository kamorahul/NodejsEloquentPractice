var express = require('express')
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server)
users = [];
connections = [];
//to run the server
server.listen(process.env.PORT || 3000)
console.log('server listening')

//to give the html
app.get('/',function(request,response){
  response.sendFile(__dirname + '/index.html')
})


//on connection
io.sockets.on('connection',function(socket){
  connections.push(socket);
  console.log('connected: %s sockets connected ',connections.length)

  //disconnection
  socket.on('disconnect',function(data){

    users.splice(users.indexOf(socket.username),1);
    updateusername();
    connections.splice(connections.indexOf(socket),1)
    console.log('Disconnected: %s sockets disconnected',connections.length)
      })

    //for sending
    socket.on('send',function(data){
      console.log(data)
      io.sockets.emit('new message',{msg:data,user: socket.username})
  })

//new user
  socket.on('new user',function(data,callback){
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateusername();
  })


  function updateusername(){
    io.sockets.emit('get users',users);
  }
  })
