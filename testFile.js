const http = require('http');

var server = http.createServer(function(req,res){
  if (req.method === "GET") {
      req.end("Hello Server 3003!, let's have some funs thanks")
  }
}).listen(3003);
