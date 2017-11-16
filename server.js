
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment=require('moment');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/login.html');
});


var connectedUser=[];

io.on('connection', function(socket){
  var name;
  

    socket.on('newUser',(obj)=>{
     name=obj.name;
     console.log(name ," is connected ")
     connectedUser.push(name);
     socket.broadcast.emit("chat message","a new user "+name+"  is connected");
    });
   

    socket.on('chat message', function(msg){
        console.log( msg);
  
      socket.broadcast.emit("chat message",moment().calendar()+" : "+msg)
    });

    socket.on('disconnect', function(){
      
      console.log(name+" user disconnect:" )

      var index=connectedUser.indexOf(name);
      connectedUser.splice(index,1);
      console.log("total connected user is :",connectedUser) 

      socket.broadcast.emit("chat message"," "+name+" is disconnected.")
    

    });
  });
http.listen(5000, function(){
  console.log('listening on *:5000');
});