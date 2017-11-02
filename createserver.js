var http = require("http");
var id = "siri";
var pass = "siri1@";

var server = http.createServer(function(req,res){
console.log(Object.keys(req))
if(req.method == "GET"){
var id1 = req.url; // url=127.0.0.1:3000/login?name=siri&pass=12345
var prs = id1.split('?')[1];

var prs1 = prs.split("&")[0];
var prs2 = prs.split("&")[1];
var name = prs1.split("=")[1];
var password = prs2.split("=")[1];
if(prs == id1){
res.end("invalid url");}

else if(id == name && pass == password){
res.end("U are logged in.....");}
else if(id == name && pass != password){
res.end("password is incorrect");
}
else{
res.end("id is incorrect");}
}
})
server.listen(3000)



