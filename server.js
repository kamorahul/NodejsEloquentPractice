var http = require("http");

var data = require("queryString");

http.createServer(function(req, res) {

	console.log(req.url)
	var queryStringInJson = data.decode(req.url)
	if (req.method === "GET") {
		res.writeHead(200, {"Content-Type": "text/json"});
	    res.end(JSON.stringify(queryStringInJson));
	
	}
	 else {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Data not found");
	}

	

}).listen(3001);

console.log("Server listening on port 3001");

