var http  = require("http")
var url=require("url")
var server =  http.createServer(function (req,res) 
{
	var path=url.parse(req.url).query
	var initialjson={"username":"gurtaj77","id":"11402005"}  // json to be compared with
	var usery=initialjson.username
	var idy=initialjson.id
	
	var regex=new RegExp(/name=+[\w]+&id=+[0-9]/)
	var result=regex.exec(path);
	var finaljson={};
	if(path.match(regex))
	{	
		console.log("regex succesfully matched")
		//console.log("true")
		var temp1=/=(.*)&/.exec(path)
		var temp2=/id=(.*)$/.exec(path)
		finaljson={"username":temp1[1],"id":temp2[1]}
		//console.log(finaljson)
		if(usery==finaljson.username&&idy==finaljson.id)
		{
			console.log("authentication success")
			res.end("authentication success")
		}
		else
		{
			console.log("authentication failed")
			res.end("authentication failed")
		}
	}
	else
	{
			res.end("Wrong input, write url in the form of http//:xyz.com:5000/?name=any&id=any or www.xyz.com/?name=any&id=any")	
			console.log("regex does not matched it properly")
	}
})
server.listen(5000)
//
