var http=require("http");
var data=require("./data");
http.createServer(function(req,res)
{
var link=req.url;
console.log(req.url);
if(link=='/')
{
res.writeHead(200,{"Content-Type": "text/plain"});
res.end("KINDLY ENTER THE QUERY STRING IN THE URL");
}
else if(req.url.match(/[?][A-Za-z]*=[A-Za-z]*&[A-Za-z]*=[A-Za-z0-9_-]*/g))
{
res.writeHead(200,{"Content-Type":"text/plain"});
var set=link.split('?')[1];
var set2=set.split('&')[0];
var set3=set2.split('=')[0];
var set7=set2.split('=')[1];
var set4=set.split('&')[1];
var set5=set4.split('=')[0];
var set6=set4.split('=')[1];
console.log(data.username,data.password);
console.log(set7,set6);
if(data.username==set7 && data.password==set6)
{
res.writeHead(200,{"Content-Type":"text/plain"});
res.end("Login sucessful");
}
else if(data.username != set7 || data.password != set6)
{
res.end("Unauthorized User");
}
}
else
res.end("URl wrong");
}).listen(4100);