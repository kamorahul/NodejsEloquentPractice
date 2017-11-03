var http=require('http');
var fs=require('fs');
var exec=require("child_process").exec;
http.createServer(function(req,res){
if(req.url=="/"){
	res.writeHead(200, {"Content-Type": "text/plain"});
res.end(" Welcome User give your path of file in link.");
}
else {
	var ans;
	x=req.url.substring(req.url.indexOf("/")+1);

	exec("node "+x, function(err, stdout) {
		if (err) {
			throw err;
		}
		fs.writeFile("Output.txt",stdout,function(err){
			console.log("file created");
		})
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end("Output\n:"+stdout.toString());
	});

}

}).listen(3000);
