
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment=require('moment');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/login.html');
});


var count=0;

io.on('connection', function(socket){
  count++;
  
    // socket.on("user",person=>{
    //   console.log(person ," is connected");
    //   usernames.push(person);
    //   userId.push(socket.id);
    // });

  
    socket.on('chat message', function(msg){
        console.log( msg);
      

      socket.broadcast.emit("chat message",moment().calendar()+" : "+msg)
    });

    socket.on('disconnect', function(){
      
      console.log("user disconnect:" )
      --count;
      console.log("total connected user is :",count)
  
      
    });
  });
http.listen(5000, function(){
  console.log('listening on *:4000');
});