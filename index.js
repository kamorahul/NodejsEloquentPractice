var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

users=[];
connections = [];

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});*/

io.on('connection', function(socket){
    console.log(' %s user connected',(connections.length+1));
    connections.push(socket)
    socket.on('disconnect', function () {
        connections.splice(connections.indexOf(socket),1);
        console.log('Connection dropped!! : %s users connected!', connections.length);
    });
    socket.on('chat message', function(msg){
        console.log(msg);
        io.emit('chat message', msg);
        //socket.broadcast.emit('chat message',msg);
    });
});


    //console.log(msg);

http.listen(3000, function(){
  console.log('listening on *:3000');
});