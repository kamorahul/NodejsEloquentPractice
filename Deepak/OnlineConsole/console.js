var http=require('http');
var fs=require('fs');
const cp = require('child_process');
var qs = require('querystring');

var server=http.createServer((request,response)=>{

if (request.method == 'GET') {
	fs.readFile("index.html", function (err, data) {
	      if (err) {
		 console.log(err);
		 response.writeHead(404, {'Content-Type': 'text/html'});
	      }else {	
		 response.writeHead(200, {'Content-Type': 'text/html'});	
		 // Write the content of the file to response body
		 response.write(data.toString());		
	      }
		response.end();
	   });
	}
else if (request.method == 'POST') {
	var body = '';
	request.on('data', (data)=>{
	body = body+data;
	});
  	
        request.on('end', function () {
		var inputs = qs.parse(body);
		fs.writeFile('jsfile.js',inputs["code"],(err)=> {
                if (err)
                 return console.log(err);
                  });

		console.log("Code written to file: " +inputs["code"]);

		var workerProcess = cp.spawn('nodejs', ["jsfile.js"]);
		
		workerProcess.stdout.on('data',(data)=> {
		console.log('Final Output:' + data);	
		
		response.write(data);
		response.end();
		});

		workerProcess.stderr.on('data',(data)=> {
		console.log('Error: ' + data);
		});

		workerProcess.on('close',(code)=> {
		console.log('Child process Executed with code ' + code);
		});
		
		});
	  }
});

server.listen(8080);
