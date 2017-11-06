var fs = require('fs');
 var a = './server1.js';

var fork = require('child_process').fork;
var fl=fork(a);

var path = '/home/admin1/Desktop';
var files1=[];
var filetype= /[a-zA-Z0-9](.js)$/

var files = fs.readdirSync(path)
for(i in files){
if(fs.statSync(path+'/'+files[i]).isFile())//checking it is a file
{
if(files[i].match(filetype))//checking for js filetype
{
files1.push(files[i])
fs.watchFile(files[i],function()
{

console.log('file is edited');
fl.kill();
console.log('console is stopped');
fl = fork(a);
console.log('server is restarted!');
 console.log('data is changed');

})
}
else
{console.log("These are not js files")}
}
}


/*
var http = require('http');
var server = http.createServer(function(req,res){
console.log(Object.keys(req))
if(req.method == "GET"){
res.end("server is started");}
});
server.listen(3800);

*/

