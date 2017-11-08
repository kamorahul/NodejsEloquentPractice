var http = require('http');
var fs = require('fs');
//var url = require('url');
var sp=require('child_process');
http.createServer( function (request, response) {  
   fs.readFile("ax.js");

var child=sp.spawn("nodejs",["ax.js"]);


 child.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
   });

   child.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
   });

   child.on('close', function (code) {
      console.log('Exit' + code);
   });

      response.end();
      }).listen(9000);

// Console will print the message
console.log('Server running at http://127.0.0.1:9000/');
