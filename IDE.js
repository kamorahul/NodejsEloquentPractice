var http=require('http');
var fs=require('fs');
const child_process = require('child_process');
//var qs = require('querystring');


var server=http.createServer((request,responce)=>{
      if (request.method == 'POST') {
          var body = '';
          request.on('data', (data)=>{
              body += data;
              console.log(body.length)
              if(body.length==0 ) {
                  request.connection.destroy();
              }
          });
          request.on('end', function () {

              fs.writeFile('jsfile.js', body.toString(),(err)=> {
                if (err)
                 return console.log(err);
                  console.log("code written sucessful in file\n");
                  runFile('jsfile.js');
                  });
          });


  fs.readFile("result.txt", "utf8", function (error, data) {
          if(error)
          {console.log("error in reading file\n");
          responce.writeHead(200, {'Content-Type':'text/html'});
         responce.write(error);
        //  responce.end();
          }
          else{
                console.log("from result "+ data);
               responce.writeHead(200, {'Content-Type':'text/html'});
               responce.write(data);
              //  responce.end();
                }
                responce.end("dsxv");
      });
    }
 });
  var runFile=(file)=>{
            var workerProcess = child_process.spawn('nodejs', [file]);
            var wstream = fs.createWriteStream('result.txt');
          workerProcess.stdout.on('data',(data)=> {
            wstream.write(data);
              console.log("file-result sucessful written in result file\n");
              //return data;
           });
         workerProcess.stderr.on('data',(data)=> {
              console.log('stderr: ' + data);
              wstream.write('Hello world!\n');

           });

         workerProcess.on('close',(code)=> {
            //  console.log('child process exited with code ' + code);
            wstream.end();
           });
}
server.listen(5000);
