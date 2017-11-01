var http  = require("http")
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

var server =  http.createServer(function (request,response) {


if(request.method == "POST"){
	var body = '';

        request.on('data', function (data) {
            body += data;
        });

        request.on('end', function () {
            var post = qs.parse(body);
            console.log(post.name);
	    console.log(post.pass);
        });
/*
//	console.log(Object.keys(request))
	var path = url.parse(request.url).query;
	console.log(path);
	var name = /=(.*)&/.exec(path);
	var id = /id=(.*)$/.exec(path);
	//var js={"Name":name[1],"ID":id[1]};
	//console.log(js);
  	response.end("Ended");   */
}
else{
	fs.readFile("index.html", function (err, data) {
	      if (err) {
		 console.log(err);
		 response.writeHead(404, {'Content-Type': 'text/html'});
	      }else {	
		 response.writeHead(200, {'Content-Type': 'text/html'});	
		 // Write the content of the file to response body
		 response.write(data.toString());		
	      }
	response.end("Page Given");
	   });
	}
       
});

server.listen(8080);
