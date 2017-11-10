var http  = require("http")
var fs = require("fs")

var server =  http.createServer(function (req,res) 
{
	req.on('data',function(data){
		fs.writeFile("input.js",data.toString(),(err) => {
		if(err) throw err;
		else	console.log(data.toString());
		});
	});

	var s = require('child_process');
	const ls = s.spawn('node', ['input.js']);
	ls.stdout.on('data',(data)=>{
		fs.writeFile("output.txt",data.toString(),(err)=>{
			if(err) throw err;
		})
		console.log(data.toString());
	});
	fs.createReadStream("./output.txt").pipe(res);
	ls.stderr.on('data',(data)=>{
		console.log(data.toString());
	});
	// ls.on('close', function(close){
	// 	res.end(close.toString());
	// });

});

server.listen(3000)


/*
let writeStream = fs.createWriteStream('secret.txt');

// write some data with a base64 encoding
writeStream.write('aef35ghhjdk74hja83ksnfjk888sfsf', 'base64');

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {  
    console.log('wrote all data to file');
});

// close the stream
writeStream.end();  
*/