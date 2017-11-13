var http=require('http');
var fs=require('fs');
var child_process=require('child_process');
http.createServer(function(req,res)
{
res.end("welcome user");
var cp=child_process.spawn('node',['childtext.js']);
cp.stdout.on('data',function(data)
{
fs.appendFile('output1.js',data);
console.log('stdout:'+data);
});
cp.stderr.on('data',function(data)
{
console.log('stderr:'+data);
fs.appendFile('output1.js',data);
});
cp.on('close',function(code)
{
console.log('child Process exited with code'+code);
});
}).listen(2000);


