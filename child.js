var http = require('http');
//var data = {"user" : "dinesh" , "password": "12345"}
var data1 =  require("./log");
var spawn  = require("child_process").spawn;
var fs = require("fs");
var host = '127.0.0.1';
var port = 1337;

var server = http.createServer(function(req, res)
{
	var url = req.url;
	if(url == '/')
 {
		 res.writeHead(200,{"content.type":"text/plain"});
	 res.end("Welcome to HOME page");
 }
	if(url.match(/login[?][a-zA-Z]*=[a-zA-Z0-9_/@!$]*&[a-zA-Z]*=[a-zA-Z0-9]*/g))
{ var tag = url.split('?')[0];
	var dtl = url.split("?")[1];
	//---------------------------------------------------------------------------------------------------------------------------
	if(tag == "/login")
	{
	var user = dtl.split("&")[0];
	var user1 = user.split("=")[0];
	var val1 = user.split("=")[1];
	var pwd = dtl.split("&")[1];
	var pwd1 = pwd.split("=")[0];
	var val2 = pwd.split("=")[1];
//-----------------------------------------------------------
		if(user1 == "user" && val1 == data1.user && pwd1 == "password" && val2 == data1.password)
{

	const child = spawn('node',['abc.js']);
var x = "--------------------------------------------------------------------------------------> \n";
	child.stdout.on('data',function(data){
fs.appendFile('output.js',x);
fs.appendFile('output.js',Date());
	fs.appendFile('output.js',data);
				console.log('stdout:', data);})

	child.stderr.on('data', function(data){
		fs.appendFile('output.js',x);
		fs.appendFile('output.js',Date());
			fs.appendFile('output.js',data);
				console.log('stderr:',data);})

	child.on('close', function(data)
{
console.log('Closed by code:',data);
});
	res.writeHead(200, {'content-type':'text/plain'});
	res.end("welcome user");
}

	else
	{
	res.writeHead(200, {'content.type':'text/plain'});
	res.end('User authosization not found');
}
}

//--------------------------------------------------------------------
else {
	res.writeHead(200, {'content-type':'text/plain'});
	res.end("Wrong header...please use 'login' to login");
}
}

//--------------------------------------------------------------------------------------------------------------------------------------
	else
{
	res.writeHead(200, {'content.type':'text/html'});
	res.end(" HTTP 404: file not find /or/ wrong url format");
}

}).listen(1337);
