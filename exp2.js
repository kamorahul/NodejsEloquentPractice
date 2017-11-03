var http = require('http');
var fs = require('fs');
var spawn = require('child_process').spawn;


var server = http.createServer(function(req,res){

res.writeHead(200,{'Content-Type':'text/js'});


const ch = spawn('node',['welcome.js']);
ch.stdout.on('data',function(data){
fs.appendFile('output.txt',data);
console.log(`${data}`);
res.end(data)
})

ch.stderr.on('data', function(data){
fs.appendFile('output.txt',data);
res.end(data)
console.log(`${data}`)
})

ch.on('close',function(data){
console.log("child process is closed")
})
})


server.listen(3030);

/* this is welcome.js
var name = 'siri';
console.log("Hi..\nWelcome..\nYou did the assignment", name);*/
