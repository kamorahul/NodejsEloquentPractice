var http  = require("http");
var fs = require("fs");
var path = require("path");
var qs  = require('./querystring');
var user = "reyaz";
var pass = "123";

var server =  http.createServer(function (req,res) {
	//console.log(Object.keys(req));
	console.log("requested url : "+req.url);
	var output = "";
	var login = false;
	if(req.method == "GET"){
		var queryStringInJson = qs.decodeGet(req.url);

		console.log("json object \n "+JSON.stringify(queryStringInJson));
		if(req.url !== "/"){
			if(queryStringInJson.hasOwnProperty("username")){
				if(queryStringInJson.hasOwnProperty("password")){
					
					if(queryStringInJson.username === user && queryStringInJson.password === pass){
						output = "welcome " + user;
						login = true;
					}else{
						output = "invalid username or password"; 
					}
				}else{
					output = "password entry not found..";
				}
			}else{
				output = "username entry not found..";
			}
		}else{
			output = `<h1>index page</h1>`;
		}

	}else if(req.method == "POST"){
		output = "post is pending...";
	}
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(`

		<!DOCTYPE html>
		<html>
		<head>
		<title>User Not Found</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		</head>
		<body class="container">
		<span class="label ${ login ? "label-success" : "label-danger" }"> ${ output }</span>
		</body>
		</html>

		`);
}).listen(3000);
console.log("nodejs server is running on port 3000");