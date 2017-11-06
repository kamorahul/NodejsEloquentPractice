var http = require('http');
var host = '127.0.0.1';
var port = 7000;
http.createServer(function(request,response)
{
response.writeHead(200,{'content-type':'text/plain'})
response.write('HELLO NODE JS SERVER RESPONSE');
response.end();
}).listen(port, host,function(){	
	console.log(`server listeling at  http://${host}:${port}`);
});



