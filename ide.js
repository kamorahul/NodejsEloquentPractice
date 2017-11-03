var http=require('http');
var fs=require('fs');
const child_process = require('child_process');

var server=http.createServer(function(request,responce)
{
  if (request.method == 'POST') 
  {
    var body = '';
    request.on('data', function(data)
    {
      body += data;
              //console.log(body.length)
      if(body.length==0 ) 
      {
        request.connection.destroy();
      }
    });
    request.on('end', function () 
    {
      fs.writeFile('jsfile.js', body.toString(),function(err) 
      {
        if (err)
        return console.log(err);
        console.log("code written sucessful in file\n");
        runFile('jsfile.js');
      });
    });


    fs.readFile("result.txt",function (error, data) 
    {
      if(error)
      {
        console.log("error in reading file\n");
        responce.writeHead(200, {'Content-Type':'text/html'
      });
        responce.write(error);
        //  responce.end();
          }
          else
          {
            
            responce.write(data.toString());
            console.log(data.toString())
          }
                responce.end("");
      });
    }
 });
 var runFile=function(file)
 {
    var workerProcess = child_process.spawn('nodejs', [file]);
    fs.writeFile('result.txt',"")  
    workerProcess.stdout.on('data',function(data){
    fs.appendFile('result.txt', data);
    //console.log("file-result sucessful written in result file\n");
    //return data;
  });
  workerProcess.stderr.on('data',function(data){
  console.log('stderr: ' + data);
  fs.appendFile('result.txt', data);
  });
  workerProcess.on('close',function(code){});
  }
server.listen(5000);