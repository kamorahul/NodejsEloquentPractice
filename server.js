var http  = require("http")
var qs  = require('./querystring');


var server =  http.createServer(function (req,res) {
	console.log(Object.keys(req));
		console.log(req.url);
	if(req.method == "GET"){
		var queryStringInJson = qs.decodeGet(req.url);
		res.end(JSON.stringify(queryStringInJson));

	}else if(req.method == "POST"){
		var queryStringInJson = qs.decodePost(req.url);
		if(queryStringInJson.hasOwnProperty("name")){
			if(queryStringInJson.name==="reyaz"){
				res.end("You are logged in as : "+queryStringInJson.name);
			}else{
				res.end("invalid details \n 404 file not found");
			}
		}else{
			res.end("invalid address");
		}
		//pending...

	}
}).listen(3000);
console.log("nodejs server is running on port 3000");