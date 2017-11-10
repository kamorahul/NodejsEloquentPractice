var http=require('http')
var s = require('./parser.js')
var k= "ranjith";
var h="1234";
http.createServer(function (req,res){
res.write('hey dude its working:');
var string=s.decode(req.url);
res.write( string[0]+" "+string[1]+" "+string[2]+" "+string[3]);
       if(k== string[1] && h==string[3])
      {
      //response.writeHead(200, {'content-type':'text/plain'});
      res.write("authentication successfull");
       }
        else
      {
      	//response.writeHead(404, {'content-type':'text/plain'});
       res.write("authentication failed");
       }
                 res.end();
                }).listen(3000);