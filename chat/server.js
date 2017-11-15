//import { func } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/joi';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

user = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('server running..');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection',function(socket){
    connections.push(socket);
    console.log('connections = %s',connections.length);

    //disconnect
    socket.on('disconnect',function(){
        user.splice(connections,user.indexOf(socket),1);
        updateUsernames();
        connections.splice(connections.indexOf(socket),1);
        console.log('disconnected - left = %s connections',connections.length);
    })

    //send message
    socket.on('send message',function(data){
       // console.log(data);
        io.sockets.emit('new message',{msg: data ,user: socket.username});
    });
  
    //new user login
    socket.on('new user',function(data,callback){
        callback(true);
        socket.username = data;
        user.push(socket.username);
        updateUsernames();
    });

    function updateUsernames(){
        io.sockets.emit('get user',user);
    };

});