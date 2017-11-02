var http  = require("http")


var server=  http.createServer(function (req,res) {
  //http://localhost:3000/path?name=rahul
  // /path?name=rahul

  var path = req.url.split("?")[0];

  var callback = match(path);

  callback(req,res);




})


var obj = {}

function all(string,callback){
    obj[string] = callback;
}

function match(string){
  return obj[string];
}


all("/login",function (req,res) {
  res.end("Login Found !!")
})


server.listen(5000)