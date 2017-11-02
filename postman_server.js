var http = require('http');
var fs = require('fs');

const {spawn} = require('child_process');
var code1 ="";

http.createServer(function (req, res) {
		req.on('data',function(data){
  			 	code1 = code1 + data.toString();
  			 	console.log(code1);
  			 	writeIT();
  			 	code1=exeCute();
		//console.log(code1);
		});
	
	function writeIT(){
   		fs.writeFile('testing _it.js', code1 , function(err) {

			}); 
  		};
  	function exeCute(){

  		var l1 = spawn('node', ['testingit.js']);

  		l1.stdout.on('data', (data) => {
  				code1= data.toString();
  				console.log(`stdout: ${data}`);
  				return code1;
				});
  		l1.stderr.on('data', (data) => {
  				console.log(`stderr: ${data}`);
				});
		l1.on('close', (code) => {
				console.log('');
  				
				});
  	};

res.end(code1);
    			}).listen(4098);