const fs = require('fs');
//var a = './svr.js';
var http = require('http');
var port = 1350;
var host = '127.0.0.1';
var server = http.createServer(function(req , res){
  res.end("Server is now active");
  //----------------------------------------------------------
  const path = '/home/dinesh/Desktop';
  var regex = /[a-zA-Z0-9](.js)/

  var list=fs.readdirSync(path)
  for(var i = 0; i < path.length ; i++)                    //NODEMON
  {
  if(fs.statSync(path+'/'+list[i]).isFile())
  {
  if(list[i].match(regex))
  fs.watchFile(list[i],function()
  {
  console.log('file is accessed');
  console.log('server is restarting.......');
   console.log('\nServer has started');
  });

  }

  }
//--------------------------------------------------------------
});
server.listen(port,host);
