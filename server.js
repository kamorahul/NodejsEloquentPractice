var http = require('http');
var url = require('url');
var serverdata = {"user" : "chandra" , "password": "123"}
var host = '127.0.0.1';
var port = 1337;

var server = http.createServer(function(request, response)
{
	console.log('read' + request.url);
	var path = request.url.split("?")[1];
	var path2 = path.split("&")[0];
	var path3 = path2.split("=")[0];//user
	var path31 = path2.split("=")[1];//chandu
	var path21 = path.split("&")[1];
	var path4 = path21.split("=")[0];//password
	var path41 = path21.split("=")[1];//123
	if(path3 == "user" && path31 == serverdata.user && path4 == "password" && path41 == serverdata.password)
{
	response.writeHead(200, {'content-type':'text/plain'});
	response.end("welcome user");
	}
	else
	{
	response.writeHead(404, {'content.type':'text/plain'});
	response.end('404 file not find');
	}
});


server.listen(port, host,function(){
console.log(`server listeling at  http://${host}:${port}`);
});

/////url === http://127.0.0.1:1337/login?user=chandra&password=123
