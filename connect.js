var connect=require('connect');
var http= require('http');
var app=connect();
var fs = require('fs');

function profile(request,response)
{
	console.log("send profile");
	if(request.method == 'GET' && request.url== '/'){
		response.writeHead(200,{"content-type":"text/html"});
		fs.createReadStream("./testserver.html").pipe(response);

	}
	else
	{
		send404Response(response);
	}
}
function forum(request,response)
{
	console.log("send forum");
	if(request.method == 'GET' && request.url== '/'){
		response.writeHead(200,{"content-type":"text/plain"});
		fs.createReadStream("./text.txt").pipe(response);

	}
	else
	{
		send404Response(response);
	}
}
function database(request,response)
 {
	console.log("send database");
	if(request.method == 'GET' && request.url== '/'){
		response.writeHead(200,{"content-type":"text/js"});
		fs.createReadStream("./test1.js").pipe(response);

	}
	else
	{
		send404Response(response);
	}
	// body...
}
function test(request,response)
 {
	console.log("send test");
	if(request.method == 'GET' && request.url== '/'){
		response.writeHead(200,{"content-type":"script/js"});
		fs.createReadStream("./test2.js").pipe(response);

	}
	else
	{
		send404Response(response);
	}
	// body...
}
app.use('/profile',profile);
app.use('/forum',forum);
app.use('/database',database);
app.use('/test',test);

http.createServer(app).listen(5000);
console.log("Server is running.....");
