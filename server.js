var app=require("express")();
//var app=express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);

users=[];
connections=[];
server.listen(process.env.PORT || 5000);
console.log("oh yeh server is running!!");
console.log("bc1");
app.get('/', function(req, res)
{
    res.sendFile(__dirname+'/index.html');
});
//console.log("bc");
io.sockets.on('connection',function(socket)
{   console.log("bc");
    connections.push(socket);
    console.log('%s connection conected',connections.length);
    
    socket.on('disconnect',function(data){
        //if(!socket.username)return;
      users.splice(users.indexOf(socket.username),1);
    updateUsernames();
    //connections=connections.toString(connections);
     connections.splice(connections.indexOf(socket),1);
     console.log('%s sockets remaining',connections.length);
    });

    socket.on('send message', function(data)
    {   console.log(data);
        io.sockets.emit('new message',{msg:data,user:socket.username});

    });

   
    socket.on('new user',function(data,callback){
        console.log(data);
        callback(true);
        socket.username=data;
        users.push(socket.username);
        updateUsernames();
    });


    function updateUsernames(){
        io.sockets.emit('get users',users);

    }

});