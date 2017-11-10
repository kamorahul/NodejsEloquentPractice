 
var http = require('http');
var fs = require('fs');
var child= require('child_process');
http.createServer(function (req, res){
         if(req.method==="POST")
         {
                req.on('data',function(data){
                             fs.writeFile('sample.js',data.toString(),function(err){
	                     if (err) {throw err ;}
                             });	
	       });
         comprun(res);
        }
}).listen(8000); 
function comprun(res){
	var childProcess=child.spawn('node',['sample.js']);
	childProcess.stdout.on("data",function(data){
		fs.writeFile('sample.txt',data.toString(),function(err){
				if (err) {throw err;}
		})
				fs.createReadStream('./sample.txt').pipe(res);
		
	})
	childProcess.stderr.on('data',function(data){
           fs.writeFile('sample.txt',data.toString(),function(err){
				if (err) {throw err;}
		})
				fs.createReadStream('./sample.txt').pipe(res);
                       
	})
}







 
