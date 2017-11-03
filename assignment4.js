var http=require('http');
var fs=require('fs');
var cp=require('child_process');
var body='';

var server=http.createServer((req,res)=>{
	if (req.method==='POST') {
		console.log("POST method");
		req.on('data',(data)=>{
			body+=data;
			readData();
			compileData(res);
		})
	}
})

server.listen(3000);

function readData(){

	fs.writeFile('map.js',body.toString(),(err)=>{
		if (err) {throw err;}	
	})
}

function compileData(res){
	var childProcess=cp.spawn('node',['map.js']);
	childProcess.stdout.on("data",(Data)=>{
		reply=Data.toString();

		fs.writeFile('log.txt',reply,(err)=>{
			console.log("child");
				if (err) {throw err;}
		})
				fs.createReadStream('./log.txt').pipe(res);
		
	})
	childProcess.stderr.on('data',(Data)=>{
			reply=Data.toString();
	})
}