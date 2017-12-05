var http  = require("http")
//var qs  = require("./querystring")
var url =require("url");
var js = {"userdb":"admin","passworddb":"abc123"};



 var server =  http.createServer(function (req,res) {
 	console.log(Object.keys(req))
 //		console.log(req.url)
 var m = url.parse(req.url).query;

// 	var queryStringInJson = qs.decode(req.url)
 	if(req.method == "GET"){

 			res.write("Hello....!")}

    else{
 				res.write("Method not allowed ")
      }
    console.log(m);
    var user = /=(.*)&/.exec(m);
 console.log(user);
   console.log(user[1]);
    var pass = /password=(.*)$/.exec(m);
   console.log(pass[1]);

if(js.userdb == user[1] && js.passworddb == pass[1])
{
  console.log("Welcome to page");
  res.end("Welcome to page");
}
else {
  console.log("   Try once more ");
  res.end("   Try once more ");
}

 })
 server.listen(3000)