var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.use(express.static(__dirname));//to tell express that we are using static file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}))

//placeholder message list as an array at the top
var messages=[
  /*{name:'Atif',message:'hi'},
  {name:'haris',message:'hello'}*/
]
app.get('/messages',(req,res) =>{
  res.send(messages);
})

app.post('/messages',(req,res) =>{
  //console.log(req.body)
  messages.push(req.body);
  io.emit('message',req.body)//to see what data we get in our body
  //io.emit('/messages',{for :'everyone'})
  //socket.broadcast.emit('new message',req.body)
  res.sendStatus(200);//this will let the client know that everything went well
})

io.on('connection',(socket) =>{
  console.log('a user connected');
  socket.on('disconnect',() =>{
    console.log('user disconnected');
  })
})
var server=http.listen(3000,() =>{
  console.log('Server listening at port',server.address().port);
});
