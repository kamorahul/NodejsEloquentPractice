var http=require('http');
var p=require('./parser.js');
var auth ={
 "name": "vikas",
  "pass" : "kaloti"};
http.createServer(function (req,rs){
                 //rs.writeHead('Content-type','Text/plain');
                 rs.write('hello\t');
var valuefromstring=p.decode(req.url);
rs.write(valuefromstring[0]+" "+valuefromstring[1]+" "+valuefromstring[2]+" "+valuefromstring[3]);
       if(auth.name==valuefromstring[1] && auth.pass==valuefromstring[3])
      {
      rs.write("\nyou are authenticated");
       }
        else
      {
       rs.write("\nLogin Failed!Try again");
       }
                 rs.end();
                 }).listen(3000);

