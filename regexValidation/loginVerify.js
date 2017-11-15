var http=require('http');
var loginData=require('./loginDetails');
var reg=/[\/?&=]/;
var server=http.createServer(function(req,res){
	var url=req.url;
	if (url.match(/login[?]user=[a-zA-Z0-9_]+&pass=[a-zA-Z_0-9]+/g)) {
	var splitData=url.split(reg);
		if(splitData[0]==='login')
		{
			if (loginData['username']===splitData[2]&&loginData['password']===splitData[4]) {
				console.log("Login Successful");
				res.writeHead(200,{"content.type":"text/html"});
        		res.end("login sucessful");
			} 
			else 
			{
				res.writeHead(200,{"content.type":"text/html"});
        		res.end("invalid credential");
			}
		}
	}
})

server.listen(4000);