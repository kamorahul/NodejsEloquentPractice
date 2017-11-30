var http=require('http');
var url=require('url');
var matchFromReg=require('./parseFromUrl.js');
var fs=require('fs');
var detail=require('./detail.json');
var qs=require('querystring'); //used for html page
var server=http.createServer((req,res)=>{
    var pathparse=url.parse(req.url).pathname;
    if(req.method=="GET")  // using postman url like localhost:2000/username=ram&password=1234
     {
     console.log("welcome");
     console.log(pathparse);
     console.log(matchFromReg.decode(pathparse));
       res.writeHead(200, {'Content-Type':'text/html'});
       res.write(matchFromReg.decode(pathparse));//gives the url pathname
       res.end();

     }

});


server.listen(2000);
