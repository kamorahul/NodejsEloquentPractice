var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
//var data=require('data.json');

app.get('/',function(req,res){
	res.sendFile(__dirname+'/socketWebpage.html');

});

io.on('connection',function(soket){
	console.log('a user connected');
	soket.on('chat message', function(msg){
    	soket.broadcast.emit('chat message', msg);
	 });
	soket.on('disconnect', function(){
    	console.log('user disconnected');
  	});
})

http.listen(4000,function(){
	console.log('listening on 4000')//;
});
