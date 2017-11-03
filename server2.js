var http        = require('http');
var url         = require('url');
var qs = require('querystring');
var      fs     = require('fs');
const child_process = require('child_process');

var server = http.createServer(function(request, response){
pathName =url.parse(request.url).pathname;





if(request.method == "POST"){

var body= '';
request.on('data',(data)=>{
  body +=data;
});
request.on('end',function(){
var input = qs.parse(body);
//console.log(input.Code);

fs.writeFile('input.js', input.Code.toString(),(err)=> {
                if (err){
                 return console.log(err);
               }
                  console.log("code written sucessful in file\n");
                    runFile('input.js');


                });
});
}
else{

  fs.readFile("code.html", function(err, data){
  if(err){
     response.writeHead(404, {'Content-type':'text/plan'});
     response.write('Page Was Not Found');
     response.end( );
  }else
  {
     response.writeHead(200);
     response.write(data);
   response.end();
     console.log(pathName);

  }
  });

}


var runFile=(file)=>{

           var workerProcess = child_process.spawn('nodejs', [file]);

         workerProcess.stdout.on('data',(data)=> {
             fs.writeFile('output.txt', data);
             console.log("input compiled successfully and stored in output file\n");

            response.end(data.toString());
          });
        workerProcess.stderr.on('data',(data)=> {
             console.log('stderr: ' + data);
             fs.writeFile('output.txt', data);
        response.end(data.toString());
          });

        workerProcess.on('close',(code)=> {
           //  console.log('child process exited with code ' + code);
          });

}






});
server.listen(5000);
