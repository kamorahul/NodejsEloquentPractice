var http = require("http");
var server=http.createServer(function(req,res){ 

if(req.method=="GET"){
		res.end("hello");                           
}


});
server.listen(7001);



// sever creating problem runing with normal file