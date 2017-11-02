
const { spawn } = require('child_process');
var fs = require('fs');
fs.readFile('input.js', function (err, data) {
  if (err) throw err;
	fs.writeFile("temp.js", data , function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
});

const ls = spawn('node', ['temp.js']);

ls.stdout.on('data', (data) => {
  //console.log(`${data}`);
  fs.writeFile("output.html", data , function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("Output stored in output.html file");
	});
});

ls.stderr.on('data', (data) => {
  //console.log(`stderr: ${data}`);
});


ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});