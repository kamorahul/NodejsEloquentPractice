
/*
	http post request is being sent by using POSTMAN
*/

var http=require('http');
var fs=require('fs');
var cp=require('child_process');
var reply='';
var body='';

fs.writeFileSync('tempCompileLog.txt','',(err)=>{
	if (err) {throw err;}
})

var server=http.createServer((req,res)=>{			// server created
	if (req.method==='POST') {
		console.log("POST method");
		req.on('data',(data)=>{
			body+=data;
			readData();
			compileData(res);
			
		}).on('end',()=>{
			console.log("File erased");
			
		})
	}

})

server.listen(3000);

function readData(){						// data read is logged to a js file
	
	if(body.length>1e6){
		req.connnection.destroy();
	}
	fs.writeFile('temp.js',body.toString(),(err)=>{
		if (err) {throw err;}	
	})
}

function compileData(res){								// data is compiled using child process and logged to a file  
	var childProcess=cp.spawn('node',['temp']);

	childProcess.stdout.on("data",(opData)=>{
		reply=opData.toString();
		fs.appendFile('tempCompileLog.txt',reply,(err)=>{
				if (err) {throw err;}
		})
		console.log("123 ; "+reply);
		
	})

	childProcess.stderr.on('data',(opData)=>{
			reply=opData.toString();
			fs.appendFile('tempCompileLog.txt',reply,(err)=>{
				if (err) {throw err;}
			})
			
	})

		setTimeout(function(){							// after 1 sec compile log is sent back as a http response
			fs.createReadStream('./tempCompileLog.txt').pipe(res);
		},1000)
		
		
}
