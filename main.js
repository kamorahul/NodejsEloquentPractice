console.log("Starting app!");
const fs = require('fs');

//clearing previous data in output file
fs.truncate('./output.js', 0, function(){console.log(' Privious out put clear in output file ')});

//Reading data from input file
fs.readFile('./input.js', (err, data) => {
  if (err) throw err;
  fs.appendFile('output.js',data);

});


const { spawn } = require('child_process');
const ls = spawn('node', ['output.js', '/assignment']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
