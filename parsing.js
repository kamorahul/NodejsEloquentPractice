var http  = require("http");
//var obj   = '{"name":"Dinesh","password":12345}'
var obj = require("./log");
//var log = '{"Name":"Dinesh","Uid":"12345","password":12345,"email":"abcd@gmail.com"}';
console.log(obj);

var server =  http.createServer(function (req,res) {
			var url = req.url;
      if(url == '/')
		{
				res.writeHead(200,{"content.type":"text/plain"});
			res.end("Welcome to HOME page");
		}
			 else if(url.match(/login[?][a-zA-z]*=[a-zA-z]*&[a-zA-z]*=[a-zA-z0-9]*/g))
			{
      var tag = url.split('?')[0];
			var details = url.split('?')[1];

     if(tag == "login")
      {
				if(details == "")
				{
				res.writeHead(200,{"content.type":"text/plain"});
        res.end("Enter login credentials in URL ");
			   }


			else
			{
		    var dtl1 = details.split('&')[0];
					 var dtl2 = details.split('&')[1];
					 var user = dtl1.split('=')[1];
					 var pwd =  dtl2.split('=')[1];

            if((user == obj.name)&&(pwd == obj.password))
					   {
						 res.writeHead(200,{"content.type":"text/plain"});
             res.writeHead("Data entry found");
						 }
						else if(user != obj.name || pwd != obj.password)
						{
							res.writeHead(200,{"content.type":"text/plain"});
							res.writeHead("Not Authorised");
						}
				}
}}

		});
		var port = 3000;
		var host = '127.0.0.1';
server.listen(port,host,function ab(){console.log("Listening to:",host,":",port)});
