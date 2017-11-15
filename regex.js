var http=require("http");
var data=require("./regex.json");
http.createServer(function(req,res)
{
var link=req.url;
console.log(req.url);
if(link=='/')
{
res.writeHead(200,{"Content-Type": "text/plain"});
res.end("Welcome To Home Page");
}
else if(req.url.match(/login[?][A-Za-z]*=[A-Za-z]*&[A-Za-z]*=[A-Za-z0-9_-]*/g))
{
res.writeHead(200,{"Content-Type":"text/plain"});
var path=link.split('?')[1];
var path2=path.split('&')[0];
var path3=path2.split('=')[0];
var path7=path2.split('=')[1];
var path4=path.split('&')[1];
var path5=path4.split('=')[0];
var path6=path4.split('=')[1];
if(data.name==path7 && data.password==path6)
{
res.writeHead(200,{"Content-Type":"text/plain"});
res.end("Login successful");
}
else if(data.name != path7 || data.password != path6)
{
res.end("Unauthorized User");
}
}
else
res.end("URl wrong");
}).listen(4000,'127.0.0.1');