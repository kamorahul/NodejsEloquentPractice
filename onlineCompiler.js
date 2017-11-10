var http = require('http'),
	util = require('util'),
	fs 	 = require('fs'),
	formidable = require('formidable'),
	fields = [];
var server = http.createServer(function(request,response){
//	if(request.method.toLowerCase()=='get')
//			putMessage(response);
	if(request.method.toLowerCase()=='post'){
		upload_execute(request,response);
		_outputWin(response);


	}
});
function displayWin(res){
	fs.readFile('',function(err,data){
		res.writeHead(200,{
			'content-type':'text/html',
				'content-length':data.length
		});
		res.write(data);
		res.end();
	});
}

function upload_execute(req,res){
	var form = new formidable.IncomingForm();
		form.on('field',function(field,value){
			form[field] = value;
		});
	//form.encoding = 'utf-8';

	var stream = fs.createWriteStream('code.js');
	stream.once('open',function(fd){
		stream.write(fields['code']);
		stream.end();
	});
	var exec = require('child_process').exec;
	exec('node ./code.js',function(error,stdout,stderr){
		var stream = fs.createWriteStream('output.txt');
		stream.once('open',function(fd){
			if(error){
				stream.write(stderr);
				fields['output'] = stderr;
			}
			else{
				stream.write(stdout);
				fields['output'] = stdout;
			}
			stream.end();

		});
	});
	form.parse(req);

}

server.listen(4000);