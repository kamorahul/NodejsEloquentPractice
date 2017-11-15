var http  = require("http")
var qs  = require("./querystring")


var server =  http.createServer(function (req,res) {
	console.log(Object.keys(req))
		console.log(req.url)
	var queryStringInJson = qs.decode(req.url)
	if(req.method == "GET"){
			res.end("Hi ")


		}else{
				res.end("Method not allowed ")

		}
})

server.listen(3000)
