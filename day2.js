var http=require("http")  //http is an variable for instance
http.createServer(function(req,res)
 {res.writeHead(200,{'Content-type':'text/plain'});
 res.end('hi i m anchal');
 }).listen(8081);
 console.log('server is running');
