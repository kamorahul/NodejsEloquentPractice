var http = require('http');
var fs = require('fs');
var child= require('child_process');
http.createServer(function (req, res){
         if(req.method==="POST")
         {
                req.on('data',function(data){
                             fs.writeFile('vikas.js',data.toString(),function(err){
	                     if (err) {throw err ;}
                             });	
	       });
         comprun(res);
        }
}).listen(8000); 
function comprun(res){
	var childProcess=child.spawn('node',['vikas.js']);
	childProcess.stdout.on("data",function(data){
		fs.writeFile('kaloti.txt',data.toString(),function(err){
				if (err) {throw err;}
		})
				fs.createReadStream('./kaloti.txt').pipe(res);
		
	})
	childProcess.stderr.on('data',function(data){
           fs.writeFile('kaloti1.txt',data.toString(),function(err){
				if (err) {throw err;}
		})
				fs.createReadStream('./kaloti1.txt').pipe(res);
                       
	})
}
