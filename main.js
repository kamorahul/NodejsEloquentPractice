console.log("Starting app!");
var http=require("http");
const fs = require('fs');
const { spawn } = require('child_process');
const ls = spawn('node', ['input.js', '/assignment']);

var myData;
                           
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);

  fs.truncate('output.js',0,function(){console.log("DONE");})

  fs.appendFile('output.js',data);

  console.log("Got saved");
  myData=data;
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

var server=http.createServer(function(req,res){

if(req.method=="GET")
{
res.end(myData);
}

});

server.listen(8000);



